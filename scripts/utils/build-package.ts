/* eslint-disable no-await-in-loop, no-restricted-syntax */
import chalk from 'chalk';
import path from 'path';
import fs from 'fs-extra';
import execa from 'execa';
import fg from 'fast-glob';
import { OutputOptions, rollup, RollupOptions } from 'rollup';
import createPackageConfig from '../../configs/rollup/create-package-config';
import { Logger } from './Logger';

const logger = new Logger('build-package');

export interface BuildOptions {
  analyze: boolean;
  sourcemap: boolean;
  minify: boolean;
  formats: string[];
}

async function locatePackage(packageName: string) {
  const folder = packageName.split('/')[1];
  const packagePath = path.join(__dirname, '../../packages', folder);
  const exists = await fs.pathExists(packagePath);
  return exists ? packagePath : null;
}

async function compile(config: RollupOptions) {
  const build = await rollup(config);
  const outputs: OutputOptions[] = Array.isArray(config.output) ? config.output : [config.output];

  return Promise.all(outputs.map((output) => build.write(output)));
}

async function generateDts(packagePath: string) {
  await execa('yarn', ['tsc', '--build'], {
    cwd: packagePath,
  });

  const files = await fg(['lib/**/*.js'], { cwd: packagePath });

  return Promise.all(files.map((file) => fs.remove(path.join(packagePath, file))));
}

export async function buildPackage(packageName: string, options?: BuildOptions) {
  const packagePath = await locatePackage(packageName || '');

  if (!packagePath) {
    logger.error(`Package ${chalk.cyan(packageName)} does not exist`);
    process.exit(1);
  }

  logger.info(`Building package ${chalk.cyan(packageName)}`);

  try {
    const startTime = Date.now();

    if (packageName === '@kubed/icons') {
      await execa('yarn', ['build:icons']);
    } else {
      await generateDts(packagePath);

      for (const format of options?.formats) {
        const config = await createPackageConfig({
          ...options,
          basePath: packagePath,
          format,
        });

        logger.info(`Building to ${chalk.cyan(format)} format...`);
        await compile(config);
      }
    }

    logger.info(
      `Package ${chalk.cyan(packageName)} was build in ${chalk.green(
        `${((Date.now() - startTime) / 1000).toFixed(2)}s`
      )}`
    );
  } catch (err) {
    logger.error(`Failed to compile package: ${chalk.cyan(packageName)}`);
    process.stdout.write(`${err.toString('minimal')}\n`);
    process.exit(1);
  }
}

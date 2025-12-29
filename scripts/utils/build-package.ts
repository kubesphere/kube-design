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
  const outputArray = Array.isArray(config.output) ? config.output : [config.output];
  const outputs: OutputOptions[] = outputArray.filter((o): o is OutputOptions => o !== undefined);

  return Promise.all(outputs.map((output) => build.write(output)));
}

async function generateDts(packagePath: string) {
  await execa('pnpm', ['tsc', '--build', 'tsconfig.build.json'], {
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
      await execa('pnpm', ['build:icons']);
    } else {
      await generateDts(packagePath);

      const formats = options?.formats ?? ['es', 'cjs'];
      for (const format of formats) {
        const config = await createPackageConfig({
          analyze: options?.analyze ?? false,
          sourcemap: options?.sourcemap ?? true,
          minify: options?.minify ?? false,
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
    process.stdout.write(`${err instanceof Error ? err.message : String(err)}\n`);
    process.exit(1);
  }
}

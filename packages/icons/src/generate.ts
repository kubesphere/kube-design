// https://github.dev/geist-org/react-icons/blob/master/src/generate.ts
import fs from 'fs-extra';
import path from 'path';
import { optimize } from 'svgo';
import { transform } from '@babel/core';
import svgoConfig from './svgo.config';
import {
  toComponentName,
  toHumpName,
  makeBasicDefinition,
  moduleBabelConfig,
  allModulesBabelConfig,
} from './utils';

const outputDir = path.join(__dirname, '../', 'dist');
const sourceDirs = [
  path.join(__dirname, '../', 'source'),
  path.join(__dirname, '../', 'fill'),
  path.join(__dirname, '../', 'duotone'),
];
const primaryColor = '#324558';

const parseSvg = (svg: string) => {
  // const getSpecifiedColorVar = (val: string | undefined, ident: string) => {
  //   if (!val) return '""';
  //   return val.includes(ident) ? '{color}' : '"var(--geist-icons-background)"';
  // };

  let newSvg = svg.replace(/-([a-z])(?=[a-z\-]*[=\s/>])/g, (g) => g[1].toUpperCase());
  newSvg = newSvg.replace(
    /<svg([^>]+)>/,
    `<svg$1 fill="#b6c2cd" ref={ref} color="#324558" {...props} height={size} width={size} className={classNames}>`
  );

  return newSvg;
};

export default (async () => {
  await fs.remove(outputDir);

  let exports = '';
  let definition = makeBasicDefinition();
  const iconSet = {};

  const action = async (sourceDir) => {
    const dirs = fs.readdirSync(sourceDir);
    await dirs.forEach((dir) => {
      const dirStat = fs.lstatSync(`${sourceDir}/${dir}`);
      if (dirStat.isDirectory()) {
        iconSet[dir] = [];
        fs.readdirSync(`${sourceDir}/${dir}`).forEach(async (file) => {
          const componentName = toComponentName(file.split('.')[0]);
          iconSet[dir].push(componentName);
          const fileName = toHumpName(file.split('.')[0]);
          const fileContent = fs.readFileSync(`${sourceDir}/${dir}/${file}`, 'utf-8');
          const result = optimize(fileContent, svgoConfig);
          const optimizedSvgString = result.data.replace(
            new RegExp(`${primaryColor}`, 'g'),
            'currentColor'
          );

          const component = `import React, {forwardRef} from 'react';
  const ${componentName} = forwardRef(({ variant = 'dark' ,size = 16, className = '', ...props }, ref) => {
    const classNames = \`kubed-icon kubed-icon__\${variant} \${className}\`;
    return ${parseSvg(optimizedSvgString)};
  });
  export default ${componentName};`;

          exports += `export { default as ${componentName} } from './${fileName}';\n`;
          definition += `export const ${componentName}: Icon;\n`;

          const componentDefinition = `${makeBasicDefinition()}declare const ${componentName}: Icon;
  export default ${componentName}\n`;
          const componentCode = transform(component, moduleBabelConfig).code;

          await fs.outputFile(path.join(outputDir, `${fileName}.d.ts`), componentDefinition);
          await fs.outputFile(path.join(outputDir, `${fileName}.js`), componentCode);
        });
      }
    });
  };

  await Promise.all(sourceDirs.map((sourceDir) => action(sourceDir)));

  const allModulesCode = transform(exports, allModulesBabelConfig).code;
  await fs.outputFile(path.join(outputDir, 'index.d.ts'), definition);
  await fs.outputFile(path.join(outputDir, 'index.js'), allModulesCode);
  await fs.outputFile(path.join(outputDir, 'icons.json'), JSON.stringify(iconSet));
})();

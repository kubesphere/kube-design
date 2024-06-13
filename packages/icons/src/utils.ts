export const moduleBabelConfig = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
    '@babel/plugin-transform-runtime',
  ],
  minified: true,
};

export const allModulesBabelConfig = {
  presets: ['@babel/preset-env'],
  minified: true,
};

export const replaceAll = (target: string, find: string, replace: string): string => {
  return target.split(find).join(replace);
};

export const toHumpName = (name: string): string => {
  return name.replace(/[-_](.)/g, (g) => g[1].toUpperCase());
};

export const toComponentName = (name: string): string => {
  const first = name.slice(0, 1).toUpperCase();
  const last = toHumpName(name.slice(1));
  return `${first}${last}`;
};

export const makeBasicDefinition = (): string => {
  return `import React from 'react';
interface Props extends React.SVGProps<SVGElement> {
  color?: string;
  variant?: 'dark' | 'light' | 'coloured' | string;
  size?: number | string;
}
type Icon = React.FunctionComponent<Props>;\n`;
};

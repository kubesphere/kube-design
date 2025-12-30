import { dirname, join } from 'path';
/* eslint-disable no-param-reassign */
const path = require('path');

module.exports = {
  stories: [
    path.resolve(__dirname, '../../packages/components/**/*.story.@(ts|tsx)').replace(/\\/g, '/'),
    // path.resolve(__dirname, './stories.tsx').replace(/\\/g, '/'),
  ],

  addons: [
    getAbsolutePath('@storybook/addon-docs'),
  ],

  typescript: {
    reactDocgen: true,
  },

  async viteFinal(config) {
    // Ensure ESM resolution for monorepo packages
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@kubed/icons': path.resolve(__dirname, '../../packages/icons/dist/index.mjs'),
      '@kubed/components': path.resolve(__dirname, '../../packages/components/src'),
      '@kubed/hooks': path.resolve(__dirname, '../../packages/hooks/src'),
    };
    return config;
  },

  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },

  docs: {},
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}

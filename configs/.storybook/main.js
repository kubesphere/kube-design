import { dirname, join } from 'path';
/* eslint-disable no-param-reassign */
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin').default;

module.exports = {
  stories: [
    path.resolve(__dirname, '../../packages/components/**/*.story.@(ts|tsx)').replace(/\\/g, '/'),
    // path.resolve(__dirname, './stories.tsx').replace(/\\/g, '/'),
  ],

  addons: [
    getAbsolutePath('storybook-addon-turbo-build'),
    getAbsolutePath('@storybook/addon-docs'),
  ],

  typescript: {
    reactDocgen: true,
  },

  webpackFinal: async (config) => {
    config.resolve = {
      ...config.resolve,
      plugins: [
        ...(config.resolve.plugins || []),
        new TsconfigPathsPlugin({
          extensions: ['.ts', '.tsx', '.js'],
          configFile: path.join(__dirname, '../../tsconfig.json'),
        }),
      ],
    };

    // Turn off docgen plugin as it breaks bundle with displayName
    // config.plugins.pop();

    return config;
  },

  framework: {
    name: getAbsolutePath('@storybook/nextjs'),
    options: {},
  },

  docs: {},
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}

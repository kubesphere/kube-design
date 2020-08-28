const { resolve } = require("path");

module.exports = {
  stories: [
    "./stories/Intro.stories.mdx",
    "./stories/Foundation/*.stories.(js|tsx|mdx)",
    "./stories/Layout/*.stories.(js|tsx|mdx)",
    "./stories/Components/*.stories.(js|tsx|mdx)",
  ],
  addons: ["@storybook/addon-docs"],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
    });
    config.resolve.alias = {
      ...config.resolve.alias,
      components: resolve(__dirname, "../src/components"),
    };
    return config;
  },
};

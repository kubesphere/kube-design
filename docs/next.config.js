const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  '@kubed/components',
  '@kubed/hooks',
  '@kubed/hooks',
  'rehype-react',
  'hast-to-hyperscript',
]);

process.env.I18NEXT_DEFAULT_CONFIG_PATH = `${__dirname}/next-i18next.config.cjs`;
const { i18n } = require('./next-i18next.config.cjs');

module.exports = withPlugins([withTM], {
  reactStrictMode: false,
  i18n,
  async redirects() {
    return [
      {
        source: '/guide',
        permanent: true,
        destination: '/guide/introduction',
      },
      {
        source: '/components',
        permanent: true,
        destination: '/components/button',
      },
      {
        source: '/hooks',
        permanent: true,
        destination: '/hooks/use-id',
      },
      {
        source: '/Icons',
        permanent: true,
        destination: '/Icons/Icons',
      },
    ];
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.md$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
        },
      ],
    });

    return config;
  },
});

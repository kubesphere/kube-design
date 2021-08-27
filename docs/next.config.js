const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  '@kubed/components',
  '@kubed/hooks',
  '@kubed/hooks',
  'rehype-react',
  'hast-to-hyperscript',
]);
const { i18n } = require('./next-i18next.config');

module.exports = withPlugins([withTM], {
  reactStrictMode: true,
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
    ];
  },
});

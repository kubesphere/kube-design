import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Kube Design',
  tagline: 'A React component library built for KubeSphere Console',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://kubesphere.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/kube-design/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kubesphere', // Usually your GitHub org/user name.
  projectName: 'kube-design', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN', 'en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/kubesphere/kube-design/tree/master/my-website/',
        },
        blog: false, // Disable blog for component library docs
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  // Enable interactive code blocks
  themes: ['@docusaurus/theme-live-codeblock'],

  // Webpack configuration for optimization
  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve('swc-loader'),
      options: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
            decorators: true,
          },
          target: 'es2017',
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
        module: {
          type: isServer ? 'commonjs' : 'es6',
        },
      },
    }),
  },

  // Performance optimization
  plugins: [
    function customWebpackConfig() {
      return {
        name: 'custom-webpack-config',
        configureWebpack(_config, isServer) {
          const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

          return {
            plugins: [
              // Bundle analyzer (only in production)
              process.env.ANALYZE === 'true' && new BundleAnalyzerPlugin({
                analyzerMode: 'static',
                reportFilename: 'bundle-analysis.html',
                openAnalyzer: false,
              }),
            ].filter(Boolean),
            optimization: {
              splitChunks: isServer ? false : {
                chunks: 'all',
                cacheGroups: {
                  // Vendor chunks for better caching
                  vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    priority: 10,
                  },
                  // Separate chunk for kubed components
                  kubed: {
                    test: /[\\/]node_modules[\\/]@kubed[\\/]/,
                    name: 'kubed',
                    priority: 20,
                  },
                  // Common code chunk
                  common: {
                    minChunks: 2,
                    priority: 5,
                    reuseExistingChunk: true,
                  },
                },
              },
            },
          };
        },
      };
    },
  ],

  themeConfig: {
    // Social card for better SEO
    image: 'img/kube-design-social-card.png',
    metadata: [
      {name: 'keywords', content: 'kube design, kubesphere, react components, kubernetes ui, cloud native, component library'},
      {name: 'description', content: 'A comprehensive React component library built for KubeSphere Console with 50+ production-ready components, TypeScript support, and accessibility-first design.'},
      {property: 'og:type', content: 'website'},
      {property: 'og:site_name', content: 'Kube Design'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:site', content: '@KubeSphere'},
    ],
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Kube Design',
      logo: {
        alt: 'Kube Design Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'guideSidebar',
          position: 'left',
          label: 'Guide',
        },
        {
          type: 'docSidebar',
          sidebarId: 'componentsSidebar',
          position: 'left',
          label: 'Components',
        },
        {
          type: 'docSidebar',
          sidebarId: 'hooksSidebar',
          position: 'left',
          label: 'Hooks',
        },
        {
          type: 'docSidebar',
          sidebarId: 'iconsSidebar',
          position: 'left',
          label: 'Icons',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/kubesphere/kube-design',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/guide/introduction',
            },
            {
              label: 'Components',
              to: '/docs/components/button',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/kubesphere/kube-design',
            },
            {
              label: 'KubeSphere',
              href: 'https://kubesphere.io',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'KubeSphere Console',
              href: 'https://github.com/kubesphere/console',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} KubeSphere. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

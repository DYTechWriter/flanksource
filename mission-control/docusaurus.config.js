// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

// const lightCodeTheme = require('prism-react-renderer/themes/palenight')
// const darkCodeTheme = require('prism-react-renderer/themes/dracula')
import fs from 'node:fs/promises';

import rehypeShiki, { RehypeShikiOptions } from '@shikijs/rehype';
import { bundledLanguages } from 'shiki';
import {
  transformerMetaHighlight,
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationFocus,
} from '@shikijs/transformers';

const rehypeShikiPlugin = [
  rehypeShiki,
  {
    themes: {
      dark: 'github-light',
      light: 'github-light',
    },
    transformers: [
      {
        name: 'meta',
        code(node) {
          const language = this.options.lang ?? 'plaintext';
          this.addClassToHast(node, `language-${language}`);
          return node;
        },
      },
      transformerMetaHighlight(),
      transformerNotationDiff(),
      transformerNotationHighlight(),
      transformerNotationFocus(),
    ],
    langs: [
      ...(Object.keys(bundledLanguages)),
      async () => JSON.parse(await fs.readFile('./languages/bash.tmLanguage.json', 'utf-8')),
    ],
  }
];

/** @type {import('@docusaurus/types').Config} */
export default async function createConfigAsync() {

  const codeImport = await import('remark-code-import');

  return {
    title: 'Mission Control',
    tagline: '',
    // staticDirectories: ['images', 'static'],
    url: 'https://docs.flanksource.com',
    baseUrl: '/',
    organizationName: 'flanksource', // Usually your GitHub org/user name.
    projectName: 'docs', // Usually your repo name.
    favicon: 'img/flanksource-icon.png',
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',

    customFields: {
      oss: false,
      productName: 'Mission Control',
      links: {
        authentication: '/reference/env-var',
        secrets: '/reference/env-var',
        connection: '/reference/connection',
        cel: '/reference/scripting/cel',
        gotemplate: '/reference/scripting/gotemplate',
        javascript: '/reference/scripting/javascript',
        jsonpath: 'https://jsonpath.com/'
      }
    },

    plugins: [
      async function resolveSymlinkPlgugin(context, options) {
        return {
          name: 'resolve-symlinks',
          configureWebpack(config, isServer, utils) {
            return {
              resolve: {
                symlinks: false
              }
            }
          }
        }
      }
    ],

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
      defaultLocale: 'en',
      locales: ['en']
    },

    presets: [
      [
        'classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            routeBasePath: '/',

            sidebarPath: './sidebars.js',
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
            editUrl: 'https://github.com/flanksource/docs/tree/main/',
            remarkPlugins: [codeImport],
            beforeDefaultRehypePlugins: [rehypeShikiPlugin]
            // rehypePlugins: [rehypeKatex],
          },
          blog: {
            showReadingTime: true
          },
          theme: {

            customCss: './src/css/custom.css'
          }
        })
      ]
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        // Replace with your project's social card
        image: 'img/flanksource-icon.png',
        home: 'docs/index.md',

        navbar: {
          title: '',
          logo: {
            alt: 'Flanksource Mission Control',
            src: 'img/mission-control-logo.svg'
          },
          items: [
            {
              to: '/',
              sidebarId: 'overview',
              activeBasePath: 'null',
              position: 'left',
              label: 'Overview'
            },
            {
              to: 'config-db',
              activeBasePath: '/config-db',
              label: 'Catalog',
              position: 'left'
            },
            {
              to: 'playbooks',
              activeBasePath: '/playbooks',
              label: 'Playbooks',
              position: 'left'
            },
            {
              to: 'topology',
              activeBasePath: 'topology',
              label: 'Topology',
              position: 'left'
            },
            {
              to: 'canary-checker/health-checks',
              label: 'Health Checks',
              activeBasePath: 'canary-checker',
              position: 'left'
            },

            {
              to: 'notifications/overview',
              activeBasePath: 'notifications',
              label: 'Notifications',
              position: 'left'
            },


            {
              to: 'registry/overview',
              activeBasePath: 'registry',
              label: 'Registry',
              position: 'left'
            },
            {
              to: 'reference/scripting',
              activeBasePath: 'reference',
              label: 'Reference',
              position: 'left'
            }
          ]
        },

        metadata: [
          {
            name: 'keywords',
            content:
              'health check, synthetic test, continuous testing, kubernetes operator'
          }
        ],

        algolia: {
          // The application ID provided by Algolia
          appId: 'OB826SK7ZD',

          // Public API key: it is safe to commit it
          apiKey: 'b6f91e146e1ed100664b6da07151f287',

          indexName: 'flanksource'
        },
        colorMode: {
          defaultMode: 'light',
          disableSwitch: false,
          respectPrefersColorScheme: true
        },
        footer: {
          style: 'dark',
          copyright: `Copyright © ${new Date().getFullYear()} Flanksource Inc.`
        },
        // prism: {
        //   additionalLanguages: ['powershell'],
        //   darkTheme: prismThemes.palenight,
        //   theme: prismThemes.dracula
        // }
      })
  }
}

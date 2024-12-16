/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],


  integrations: [
    {
      dirName: 'integrations',
      type: 'autogenerated'
    }

  ],

  guide: [

    {
      type: 'autogenerated',
      dirName: "guide"
    }
  ],
  reference: [
    {
      type: 'autogenerated',
      dirName: "reference"
    }
  ],
  overview: [
    {
      type: 'doc',
      id: 'index',
      label: 'Overview'
    },
    {
      type: 'doc',
      id: 'how-it-works',
    },

    {
      type: 'category',
      label: 'Installation',
      customProps: {
        icon: 'getting-started',
      },
      link: {
        type: 'doc',
        id: 'installation/index',
      },

      items: [
        // {
        //   type: 'doc',
        //   label: 'SaaS',
        //   id: 'installation/saas'
        // },
        // {
        //   type: 'doc',
        //   label: 'Deployment Models',
        //   id: 'installation/deployment-models'

        // },

        {
          type: 'category',
          label: 'SaaS',
          link: {
            type: 'doc',
            id: 'installation/saas/getting-started',
          },
          items: [

            {
              type: 'doc',
              label: 'Getting Started',
              id: 'installation/saas/getting-started',
            },

            {
              type: 'doc',
              id: 'installation/saas/eks',
              label: 'AWS EKS'
            },

            {
              type: 'doc',
              id: 'installation/saas/agent',
              label: 'Agent'
            },

            {
              type: 'doc',
              id: 'installation/saas/kubectl',
              label: 'Kubectl Access'
            },

          ]
        },
        {
          type: 'category',
          label: 'Self-Hosted',
          items: [
            {
              type: 'doc',
              id: 'installation/self-hosted/getting-started',
              label: 'Installation'
            },
            {
              type: 'doc',
              id: 'installation/self-hosted/database',
              label: 'Database'
            },
            {
              type: 'doc',
              id: 'installation/self-hosted/oidc',
              label: 'SSO (OIDC)'
            },

            {
              type: 'doc',
              id: 'installation/self-hosted/eks',
              label: 'AWS EKS'
            }


          ]
        },

        {
          type: 'doc',
          id: 'installation/local-testing',
          label: 'Local Testing'
        }
      ]
    },

    {
      type: 'doc',
      id: 'architecture',
      label: 'Architecture'
    },
    {
      type: 'category',
      link: {
        type: 'doc',
        id: 'security',
      },
      label: 'Security',
      items: [
        {
          type: 'doc',
          id: 'hardening',
        },
      ]
    }
  ]
}

module.exports = sidebars

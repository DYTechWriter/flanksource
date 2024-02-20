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

  // But you can create a sidebar manually
  canaryCheckerSidebar: [
    {
      type: 'doc',
      id: 'canary-checker/overview',
      label: 'Overview'
    },
    {
      type: 'doc',
      id: 'canary-checker/getting-started',
      label: 'Getting Started'
    },
    {
      type: 'category',
      label: 'Installation',
      link: {
        type: 'generated-index',
        title: 'Installation',
        slug: '/canary-checker/installation',
      },
      items: [
        {
          type: 'doc',
          id: 'canary-checker/cli',
          label: 'CLI',
        },
        {
          type: 'doc',
          id: 'canary-checker/concepts/image-variants',
          label: 'Image Variants',
        },

      ]
    },
    {
      type: 'category',
      label: 'Concepts',
      items: [
        {
          type: 'doc',
          id: 'canary-checker/concepts/metrics-exporter',
          label: 'Metrics Exporter',
        },
        {
          type: 'doc',
          id: 'canary-checker/concepts/grafana',
          label: 'Grafana',
        },

        {
          type: 'category',
          label: 'Expressions',
          link: {
            type: 'generated-index',
            title: 'Expressions',
            slug: '/concepts/expressions',
          },
          items: [
            {
              type: 'doc',
              id: 'canary-checker/concepts/display-formatting',
              label: 'Display Formatting',
            },
            {
              type: 'doc',
              id: 'canary-checker/concepts/health-evaluation',
              label: 'Health Evaluation',
            },

            {
              type: 'doc',
              id: 'canary-checker/concepts/transforms',
              label: 'Transforms',
            },

          ]
        },

        {
          type: 'doc',
          id: 'canary-checker/concepts/troubleshooting',
          label: 'Troubleshooting',
        },
      ],
    },
    {
      type: 'category',
      label: 'Probes / Alerts',
      link: {
        type: 'generated-index',
        title: 'Probes / Alerts',
        // description: 'Learn about the most important Docusaurus concepts!',
        slug: '/types',
        keywords: ['guides'],
        image: '/img/docusaurus.png',
      },
      items: [
        {
          type: 'doc',
          id: 'canary-checker/reference/http',
          label: 'HTTP',
        },

        {
          type: 'doc',
          id: 'canary-checker/reference/tcp',
          label: 'TCP',
        },
        {
          type: 'doc',
          id: 'canary-checker/reference/dns',
          label: 'DNS',
        },
        {
          type: 'doc',
          id: 'canary-checker/reference/icmp',
          label: 'ICMP',
        },

        {
          type: 'doc',
          id: 'canary-checker/reference/alert-manager',
          label: 'Alert Manager',
        },
        {
          type: 'doc',
          id: 'canary-checker/reference/cloudwatch',
          label: 'AWS Cloud Watch',
        },
        {
          type: 'doc',
          id: 'canary-checker/reference/aws-config-rule',
          label: 'AWS Config Rule',
        },


      ],
    },
    {
      type: 'category',
      label: 'Folder / Backups',
      items: [
        {
          type: 'doc',
          id: 'canary-checker/reference/folder',
          label: 'Folder',
        },
        {
          type: 'doc',
          id: 'canary-checker/reference/gcs-bucket',
          label: 'GCS Bucket',
        },
        {
          type: 'doc',
          id: 'canary-checker/reference/s3-bucket',
          label: 'S3 Bucket',
        },
        {
          type: 'doc',
          id: 'canary-checker/reference/sftp',
          label: 'SFTP',
        },
        {
          type: 'doc',
          id: 'canary-checker/reference/smb',
          label: 'SMB/CIFS',
        },
        {
          type: 'doc',
          id: 'canary-checker/reference/gcs-database-backup',
          label: 'GCS Database Backup',
        },
        {
          type: 'doc',
          id: 'canary-checker/reference/restic',
          label: 'Restic',
        },

      ]
    },
    {
      type: 'category',
      label: 'Data / Queries',
      items: [
        {
          type: 'doc',
          id: 'canary-checker/reference/prometheus',
          label: 'Prometheus',
        },

        {
          type: 'doc',
          id: 'canary-checker/reference/aws-config',
          label: 'AWS Config',
        },
        {
          type: 'doc',
          id: 'canary-checker/reference/configdb',
          label: 'Flanksource Config DB',
        },
        {
          type: 'doc',
          id: 'canary-checker/reference/kubernetes',
          label: 'Kubernetes Resources',
        },
        {
          type: 'doc',
          id: 'canary-checker/reference/elasticsearch',
          label: 'Elasticsearch',
        },
        {
          type: 'doc',
          id: 'canary-checker/reference/ldap',
          label: 'LDAP',
        },
        {
          type: 'doc',
          id: 'canary-checker/reference/mongo',
          label: 'MongoDB',
        },
        {
          type: 'doc',
          id: 'canary-checker/reference/mssql',
          label: 'MSSQL',
        },
        {
          type: 'doc',
          id: 'canary-checker/reference/mysql',
          label: 'MySQL',
        },
        {
          type: 'doc',
          id: 'canary-checker/reference/postgres',
          label: 'Postgres',
        },
        {
          type: 'doc',
          id: 'canary-checker/reference/redis',
          label: 'Redis',
        },

      ],

    },
    {
      type: 'category',
      label: 'Active / Integration',
      items: [

        {
          type: 'doc',
          id: 'canary-checker/reference/exec',
          label: 'Exec',
        },
        {
          type: 'doc',
          id: 'canary-checker/reference/jmeter',
          label: 'JMeter',
        },
        {
          type: 'doc',
          id: 'canary-checker/reference/junit',
          label: 'JUnit',
        },
        {
          type: 'doc',
          id: 'canary-checker/reference/k6',
          label: 'K6',
        },
        {
          type: 'doc',
          id: 'canary-checker/reference/newman',
          label: 'Newman / Postman',
        },
        {
          type: 'doc',
          id: 'canary-checker/reference/playwright',
          label: 'Playwright',
        },
        {
          type: 'doc',
          id: 'canary-checker/reference/azure-devops',
          label: 'Azure DevOps',
        },

      ],
    },
    {
      type: 'category',
      label: 'Infrastructure',
      items: [
        {
          type: 'doc',
          id: 'canary-checker/reference/containerd',
          label: 'Containerd/Docker',
        },
        {
          type: 'doc',
          id: 'canary-checker/reference/helm',
          label: 'Helm',
        },
        {
          type: 'doc',
          id: 'canary-checker/reference/ec2',
          label: 'EC2',
        },
        {
          type: 'doc',
          id: 'canary-checker/reference/pod',
          label: 'Pod',
        },
        {
          type: 'doc',
          id: 'canary-checker/reference/s3-protocol',
          label: 'S3 Protocol',
        },
      ],
    },


    {
      type: 'category',
      label: 'Comparisons',
      items: [
        {
          type: 'doc',
          id: 'canary-checker/comparisons/blackbox-exporter',
          label: 'Blackbox Exporter',
        },
      ],
    },
  ],
  configdbSidebar: [
    {
      type: 'doc',
      id: 'config-db/overview',
      label: 'Overview'
    },
    {
      type: 'category',
      label: 'Concepts',
      items: [
        {
          type: 'doc',
          id: 'config-db/concepts/extraction',
          label: 'Extraction'
        },
        {
          type: 'doc',
          id: 'config-db/concepts/transform',
          label: 'Transform'
        },
        {
          type: 'doc',
          id: 'config-db/concepts/retention',
          label: 'Retention'
        },
      ]
    },
    {
      type: 'category',
      label: 'Scrapers',
      items: [
        {
          type: 'doc',
          id: 'config-db/scrapers/aws',
          label: 'AWS'
        },
        {
          type: 'doc',
          id: 'config-db/scrapers/azure-devops',
          label: 'Azure DevOps'
        },
        {
          type: 'doc',
          id: 'config-db/scrapers/custom',
          label: 'Custom'
        },
        {
          type: 'doc',
          id: 'config-db/scrapers/trivy',
          label: 'Trivy'
        },
        {
          type: 'doc',
          id: 'config-db/scrapers/file',
          label: 'File'
        },
        {
          type: 'doc',
          id: 'config-db/scrapers/kubernetes-file',
          label: 'Kubernetes File'
        },
        {
          type: 'doc',
          id: 'config-db/scrapers/kubernetes',
          label: 'Kubernetes'
        },
        {
          type: 'doc',
          id: 'config-db/scrapers/sql',
          label: 'SQL'
        }
      ]
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        {
          type: 'doc',
          id: 'config-db/tutorials/cli',
          label: 'CLI'
        },
        {
          type: 'doc',
          id: 'config-db/tutorials/configuration',
          label: 'Configuration'
        },
        {
          type: 'doc',
          id: 'config-db/tutorials/example-git-file',
          label: 'Example Git File'
        },
        {
          type: 'doc',
          id: 'config-db/tutorials/install-helm',
          label: 'Helm Installation'
        },
        {
          type: 'doc',
          id: 'config-db/tutorials/install-standalone',
          label: 'Standalone Installation'
        }
      ]
    },
    {
      type: 'category',
      label: 'Examples',
      items: [
        {
          type: 'doc',
          id: 'config-db/examples/forming-relationship',
          label: 'Forming relationships'
        },
        {
          type: 'doc',
          id: 'config-db/examples/kubernetes-relationship',
          label: 'Kubernetes relationships'
        },
         {
          type: 'doc',
          id: 'config-db/examples/exclude-fields',
          label: 'Exclude superflous/sensitive fields'
        },
        {
          type: 'doc',
          id: 'config-db/examples/masking-fields',
          label: 'Masking sensitive fields'
        },
      ]
    },
    {
      type: 'category',
      label: 'References',
      items: [
        {
          type: 'doc',
          id: 'config-db/references/relationship-lookup',
          label: 'Relationship Lookup'
        },
      ]
    },
  ],
  playbooksSidebar: [
    {
      type: 'doc',
      id: 'playbooks/overview',
      label: 'Overview'
    },
    {
      type: 'doc',
      id: 'playbooks/quick-start',
      label: 'Quick Start'
    },
    {
      type: 'doc',
      id: 'playbooks/api',
      label: 'API'
    },
    {
      type: 'category',
      label: 'Concepts',
      items: [
        {
          type: 'doc',
          id: 'playbooks/concepts/playbook',
          label: 'Playbook'
        },
        {
          type: 'doc',
          id: 'playbooks/concepts/runners',
          label: 'Runners',
        },
        {
          type: 'doc',
          id: 'playbooks/concepts/approval',
          label: 'Approval'
        },
        {
          type: 'doc',
          id: 'playbooks/concepts/artifacts',
          label: 'Artifacts'
        },
        {
          type: 'doc',
          id: 'playbooks/concepts/expression',
          label: 'Expression'
        },
        {
          type: 'doc',
          id: 'playbooks/concepts/templating',
          label: 'Templating'
        },
      ]
    },
    {
      type: 'category',
      label: 'Triggers',
      items: [
        {
          type: 'doc',
          id: 'playbooks/triggers/events',
          label: 'Events'
        },
        {
          type: 'doc',
          id: 'playbooks/triggers/self-service',
          label: 'Self-Service'
        },
        {
          type: 'doc',
          id: 'playbooks/triggers/webhook',
          label: 'Webhook'
        },
      ],
    },
    {
      type: 'category',
      label: 'Actions',
      items: [
        {
          type: 'doc',
          id: 'playbooks/actions/exec',
          label: 'Exec'
        },
        {
          type: 'doc',
          id: 'playbooks/actions/github',
          label: 'Github'
        },
        {
          type: 'doc',
          id: 'playbooks/actions/gitops',
          label: 'GitOps'
        },
        {
          type: 'doc',
          id: 'playbooks/actions/http',
          label: 'HTTP'
        },
        {
          type: 'doc',
          id: 'playbooks/actions/notification',
          label: 'Notification'
        },
        {
          type: 'doc',
          id: 'playbooks/actions/pod',
          label: 'Pod'
        },
        {
          type: 'doc',
          id: 'playbooks/actions/sql',
          label: 'SQL'
        }
      ]
    },
    {
      type: 'category',
      label: 'Examples',
      items: [
        {
          type: 'doc',
          id: 'playbooks/examples/kubectl-logs-artifacts',
          label: 'Artifacts from kubectl logs',
        },
        {
          type: 'doc',
          id: 'playbooks/examples/kubectl-cluster-role-binding',
          label: 'Cluster Role Binding with delayed cleanup'
        },
        {
          type: 'doc',
          id: 'playbooks/examples/gitops-k8s-cluster-role-binding',
          label: 'Cluster Role Binding with Gitops'
        },
        {
          type: 'doc',
          id: 'playbooks/examples/restart-pod-on-check-failure',
          label: 'Restart Kubernetes Deployment'
        },
        {
          type: 'doc',
          id: 'playbooks/examples/approval',
          label: 'Approval'
        },
        {
          type: 'doc',
          id: 'playbooks/examples/exec-delay',
          label: 'Delaying actions'
        },
        {
          type: 'doc',
          id: 'playbooks/examples/action-filter-action-result',
          label: 'Accessing result of previous actions'
        },
        {
          type: 'doc',
          id: 'playbooks/examples/action-filter',
          label: 'Conditionally running actions'
        },
      ],
    },
    {
      type: 'category',
      label: 'References',
      items: [
        {
          type: 'doc',
          id: 'playbooks/references/connections',
          label: 'Connections',
        },
        {
          type: 'doc',
          id: 'playbooks/references/component',
          label: 'Component',
        },
        {
          type: 'doc',
          id: 'playbooks/references/check',
          label: 'Check',
        },
        {
          type: 'doc',
          id: 'playbooks/references/config_item',
          label: 'ConfigItem',
        },
        {
          type: 'doc',
          id: 'playbooks/references/envvar',
          label: 'EnvVar',
        },
      ]
    }
  ],
  topologySidebar: [
    {
      type: 'doc',
      id: 'topology/overview',
      label: 'Overview',
    },
    {
      type: 'category',
      label: 'Concepts',
      items: [
        {
          type: 'doc',
          id: 'topology/concepts/topology',
          label: 'Topology',
        },
        {
          type: 'doc',
          id: 'topology/concepts/properties',
          label: 'Properties',
        },
        {
          type: 'doc',
          id: 'topology/concepts/lookup',
          label: 'Lookup',
        },
        {
          type: 'doc',
          id: 'topology/concepts/for-each',
          label: 'For Each',
        },
        {
          type: 'doc',
          id: 'topology/concepts/authentication',
          label: 'Authentication',
        },
        {
          type: 'doc',
          id: 'topology/concepts/config',
          label: 'Configuration',
        },
        {
          type: 'doc',
          id: 'topology/concepts/health-checks',
          label: 'Health Checks',
        },
        {
          type: 'doc',
          id: 'topology/concepts/templating',
          label: 'Templating',
        }
      ]
    },
    {
      type: 'category',
      label: 'Examples',
      items: [
        {
          type: 'doc',
          id: 'topology/examples/aws',
          label: 'AWS',
        },
        {
          type: 'doc',
          id: 'topology/examples/git',
          label: 'Git',
        },
        {
          type: 'doc',
          id: 'topology/examples/kubernetes',
          label: 'Kubernetes',
        },
        {
          type: 'doc',
          id: 'topology/examples/kubernetes-workload',
          label: 'Kubernetes-workload',
        },
      ]
    },
    {
      type: 'category',
      label: 'References',
      items: [
        {
          type: 'doc',
          id: 'topology/references/components',
          label: 'Components',
        },
        {
          type: 'doc',
          id: 'topology/references/properties',
          label: 'Properties',
        },
        {
          type: 'category',
          label: 'Component Lookups',
          items: [
            {
              type: 'doc',
              id: 'topology/references/configdb',
              label: 'Config DB',
            },
            {
              type: 'doc',
              id: 'topology/references/exec',
              label: 'Exec',
            },
            {
              type: 'doc',
              id: 'topology/references/http',
              label: 'HTTP',
            },
            {
              type: 'doc',
              id: 'topology/references/kubernetes',
              label: 'Kubernetes',
            },
            {
              type: 'doc',
              id: 'topology/references/mongo',
              label: 'Mongo',
            },
            {
              type: 'doc',
              id: 'topology/references/mssql',
              label: 'MS SQL Server',
            },
            {
              type: 'doc',
              id: 'topology/references/mysql',
              label: 'MySQL',
            },
            // There are errors while compiling this file
            // {
            //   type: 'doc',
            //   id: 'topology/references/postgres',
            //   label: 'Postgres',
            // },
            {
              type: 'doc',
              id: 'topology/references/prometheus',
              label: 'Prometheus',
            },
            {
              type: 'doc',
              id: 'topology/references/redis',
              label: 'Redis',
            }
          ]
        },
      ]
    },
  ],
  notificationsSidebar: [
    {
      type: 'doc',
      id: 'notifications/overview',
      label: 'Overview'
    },
    {
      type: 'category',
      label: 'Concepts',
      items: [
        {
          type: 'doc',
          id: 'notifications/concepts/filtering',
          label: 'Filtering'
        },
        {
          type: 'doc',
          id: 'notifications/concepts/templating',
          label: 'Templating'
        }
      ]
    },
    {
      type: 'category',
      label: 'Events',
      link: {
        type: 'generated-index',
        title: 'Notification Events',
        slug: '/notifications/events',
      },
      items: [
        {
          type: 'doc',
          id: 'notifications/events/components',
          label: 'Components'
        },
        {
          type: 'doc',
          id: 'notifications/events/health-checks',
          label: 'Health Checks'
        },
        {
          type: 'doc',
          id: 'notifications/events/incidents',
          label: 'Incidents'
        }
      ]
    },
    {
      type: 'doc',
      id: 'notifications/channels',
      label: 'Channels'
    },
    {
      type: 'category',
      label: 'Examples',
      items: [
        {
          type: 'doc',
          id: 'notifications/examples/slack',
          label: 'Slack',
        }
      ]
    }
  ],
  registrySidebar: [
    {
        type: 'doc',
        id: 'registry/overview',
        label: 'Overview',
    },
    {
        type: 'doc',
        id: 'registry/aws',
        label: 'AWS',
    },
    {
        type: 'doc',
        id: 'registry/kubernetes',
        label: 'Kubernetes',
    },
  ],
  reference: [
    {
      type: 'doc',
      id: 'reference/secret-management',
      label: 'Secret Management',
    },
    {
      type: 'doc',
      id: 'reference/property',
      label: 'Property',
    },
    {
      type: 'doc',
      id: 'reference/connection',
      label: 'Connection',
    },
    {
      type: 'doc',
      id: 'reference/connections',
      label: 'Authentication',
    },
    {
      type: 'category',
      label: 'Scripting',
      link: {
        type: 'generated-index',
        title: 'Scripting',
        slug: '/reference/scripting',
      },
      items: [
        {
          type: 'doc',
          id: 'reference/scripting/gotemplate',
          label: 'Go Templates',
        },
        {
          type: 'doc',
          id: 'reference/scripting/cel',
          label: 'CEL Expressions',
        },
        {
          type: 'doc',
          id: 'reference/scripting/javascript',
          label: 'Javascript',
        },
      ],
    },
    {
      type: 'doc',
      id: 'reference/resource_selector',
      label: 'Resource Selector',
    },
  ],
  overview: [
    {
      type: 'doc',
      id: 'index',
      label: 'Overview'
    },
    {
      type: 'category',
      label: 'Installation',
      link: {
        type: 'generated-index',
        title: 'Installation',
        slug: '/installation',
      },
      items: [
        {
          type: 'doc',
          label: 'SaaS',
          id: 'installation/saas'
        },
        {
          type: 'category',
          label: 'Self-Hosted',
          items: [
            {
              type: 'doc',
              id: 'installation/helm',
              label: 'Helm',
            },

            {
              type: 'doc',
              id: 'installation/database',
              label: 'Database',
            },
            {
              type: 'doc',
              id: 'installation/oidc',
              label: 'SSO (OIDC)',
            },
          ]
        },




        {
          type: 'category',
          label: 'Cloud Providers',
          items: [
            {
              type: 'doc',
              id: 'installation/aws-eks',
              label: 'AWS EKS',
            },
          ]
        },


        {
          type: 'category',
          label: 'Local Testing',
          items: [
            {
              type: 'doc',
              id: 'installation/kind_linux',
              label: 'Kind',
            },
            {
              type: 'doc',
              id: 'installation/minikube_windows',
              label: 'Minikube (Windows)',
            }]
        }
      ]
    },

    {
      type: 'doc',
      id: 'architecture',
      label: 'Architecture'
    },
    {
      type: 'doc',
      id: 'security',
      label: 'Security'
    },

  ],

};

module.exports = sidebars

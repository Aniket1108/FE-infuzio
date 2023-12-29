const navigation = () => {
  return [
    {
      title: 'Dashboards',
      icon: 'bx:home-circle',
      badgeContent: 'new',
      badgeColor: 'error',
      children: [
        {
          title: 'Overview',
          path: '/dashboard/overview'
        }
      ]
    },

    {
      sectionTitle: 'Wallet'
    },
    {
      title: 'Send',
      icon: 'bx:window-open',
      path: '/wallet/send-crypto'
    },
    {
      sectionTitle: 'Invest & Earn'
    },
    {
      title: 'Faucet',
      icon: 'bx:bitcoin',
      children: [
        {
          title: 'Overview',
          path: '/faucet/overview'
        },
        {
          title: 'Challenges',
          path: '/faucet/challenges'
        },
        {
          title: 'Offerwalls',
          path: '/faucet/offerwalls'
        },
        {
          title: 'Shortlinks',
          path: '/faucet/shortlinks'
        },
      ]
    },
    {
      sectionTitle: '**********--------trial---------*********'
    },
    {
      sectionTitle: '**********--------trial---------*********'
    },
    {
      sectionTitle: '**********--------trial---------*********'
    },
    {
      sectionTitle: '**********--------trial---------*********'
    },
    {
      title: 'Dashboards',
      icon: 'bx:home-circle',
      badgeContent: 'new',
      badgeColor: 'error',
      children: [
        {
          title: 'Overview',
          path: '/dashboard/overview'
        },
        {
          title: 'Analytics',
          path: '/temp/dashboards/analytics'
        },
        {
          title: 'CRM',
          path: '/temp/dashboards/crm'
        },
        {
          title: 'eCommerce',
          path: '/temp/dashboards/ecommerce'
        }
      ]
    },
    {
      sectionTitle: 'Apps & Pages'
    },
    {
      title: 'Email',
      icon: 'bx:envelope',
      path: '/temp/apps/email'
    },
    {
      title: 'Chat',
      icon: 'bx:message',
      path: '/temp/apps/chat'
    },
    {
      title: 'Calendar',
      icon: 'bx:calendar',
      path: '/temp/apps/calendar'
    },
    {
      title: 'Invoice',
      icon: 'bx:food-menu',
      children: [
        {
          title: 'List',
          path: '/temp/apps/invoice/list'
        },
        {
          title: 'Preview',
          path: '/temp/apps/invoice/preview'
        },
        {
          title: 'Edit',
          path: '/temp/apps/invoice/edit'
        },
        {
          title: 'Add',
          path: '/temp/apps/invoice/add'
        }
      ]
    },
    {
      title: 'User',
      icon: 'bx:user',
      children: [
        {
          title: 'List',
          path: '/temp/apps/user/list'
        },
        {
          title: 'View',
          children: [
            {
              title: 'Account',
              path: '/temp/apps/user/view/account'
            },
            {
              title: 'Security',
              path: '/temp/apps/user/view/security'
            },
            {
              title: 'Billing & Plans',
              path: '/temp/apps/user/view/billing-plan'
            },
            {
              title: 'Notifications',
              path: '/temp/apps/user/view/notification'
            },
            {
              title: 'Connection',
              path: '/temp/apps/user/view/connection'
            }
          ]
        }
      ]
    },
    {
      title: 'Roles & Permissions',
      icon: 'bx:check-shield',
      children: [
        {
          title: 'Roles',
          path: '/temp/apps/roles'
        },
        {
          title: 'Permissions',
          path: '/temp/apps/permissions'
        }
      ]
    },
    {
      title: 'Pages',
      icon: 'bx:dock-top',
      children: [
        {
          title: 'User Profile',
          children: [
            {
              title: 'Profile',
              path: '/temp/pages/user-profile/profile'
            },
            {
              title: 'Teams',
              path: '/temp/pages/user-profile/teams'
            },
            {
              title: 'Projects',
              path: '/temp/pages/user-profile/projects'
            },
            {
              title: 'Connections',
              path: '/temp/pages/user-profile/connections'
            }
          ]
        },
        {
          title: 'Account Settings',
          children: [
            {
              title: 'Account',
              path: '/temp/pages/account-settings/account'
            },
            {
              title: 'Security',
              path: '/temp/pages/account-settings/security'
            },
            {
              title: 'Billing & Plans',
              path: '/temp/pages/account-settings/billing-plan'
            },
            {
              title: 'Notifications',
              path: '/temp/pages/account-settings/notifications'
            },
            {
              title: 'Connections',
              path: '/temp/pages/account-settings/connections'
            }
          ]
        },
        {
          title: 'FAQ',
          path: '/temp/pages/faq'
        },
        {
          title: 'Help Center',
          path: '/temp/pages/help-center'
        },
        {
          title: 'Pricing',
          path: '/temp/pages/pricing'
        },
        {
          title: 'Miscellaneous',
          children: [
            {
              openInNewTab: true,
              title: 'Coming Soon',
              path: '/temp/pages/misc/coming-soon'
            },
            {
              openInNewTab: true,
              title: 'Under Maintenance',
              path: '/temp/pages/misc/under-maintenance'
            },
            {
              openInNewTab: true,
              title: 'Page Not Found - 404',
              path: '/temp/pages/misc/404-not-found'
            },
            {
              openInNewTab: true,
              title: 'Not Authorized - 401',
              path: '/temp/pages/misc/401-not-authorized'
            },
            {
              openInNewTab: true,
              title: 'Server Error - 500',
              path: '/temp/pages/misc/500-server-error'
            }
          ]
        }
      ]
    },
    {
      title: 'Auth Pages',
      icon: 'bx:lock-open-alt',
      children: [
        {
          title: 'Login',
          children: [
            {
              openInNewTab: true,
              title: 'Login v1',
              path: '/temp/pages/auth/login-v1'
            },
            {
              openInNewTab: true,
              title: 'Login v2',
              path: '/temp/pages/auth/login-v2'
            },
            {
              openInNewTab: true,
              title: 'Login With AppBar',
              path: '/temp/pages/auth/login-with-appbar'
            }
          ]
        },
        {
          title: 'Register',
          children: [
            {
              openInNewTab: true,
              title: 'Register v1',
              path: '/temp/pages/auth/register-v1'
            },
            {
              openInNewTab: true,
              title: 'Register v2',
              path: '/temp/pages/auth/register-v2'
            },
            {
              openInNewTab: true,
              title: 'Register Multi-Steps',
              path: '/temp/pages/auth/register-multi-steps'
            }
          ]
        },
        {
          title: 'Verify Email',
          children: [
            {
              openInNewTab: true,
              title: 'Verify Email v1',
              path: '/temp/pages/auth/verify-email-v1'
            },
            {
              openInNewTab: true,
              title: 'Verify Email v2',
              path: '/temp/pages/auth/verify-email-v2'
            }
          ]
        },
        {
          title: 'Forgot Password',
          children: [
            {
              openInNewTab: true,
              title: 'Forgot Password v1',
              path: '/temp/pages/auth/forgot-password-v1'
            },
            {
              openInNewTab: true,
              title: 'Forgot Password v2',
              path: '/temp/pages/auth/forgot-password-v2'
            }
          ]
        },
        {
          title: 'Reset Password',
          children: [
            {
              openInNewTab: true,
              title: 'Reset Password v1',
              path: '/temp/pages/auth/reset-password-v1'
            },
            {
              openInNewTab: true,
              title: 'Reset Password v2',
              path: '/temp/pages/auth/reset-password-v2'
            }
          ]
        },
        {
          title: 'Two Steps',
          children: [
            {
              openInNewTab: true,
              title: 'Two Steps v1',
              path: '/temp/pages/auth/two-steps-v1'
            },
            {
              openInNewTab: true,
              title: 'Two Steps v2',
              path: '/temp/pages/auth/two-steps-v2'
            }
          ]
        }
      ]
    },
    {
      title: 'Wizard Examples',
      icon: 'bx:spreadsheet',
      children: [
        {
          title: 'Checkout',
          path: '/temp/pages/wizard-examples/checkout'
        },
        {
          title: 'Property Listing',
          path: '/temp/pages/wizard-examples/property-listing'
        },
        {
          title: 'Create Deal',
          path: '/temp/pages/wizard-examples/create-deal'
        }
      ]
    },
    {
      icon: 'bx:window-open',
      title: 'Dialog Examples',
      path: '/temp/pages/dialog-examples'
    },
    {
      sectionTitle: 'User Interface'
    },
    {
      title: 'Typography',
      icon: 'bx:text',
      path: '/temp/ui/typography'
    },
    {
      title: 'Icons',
      path: '/temp/ui/icons',
      icon: 'bx:crown'
    },
    {
      title: 'Icons Test',
      path: '/temp/ui/icons-test',
      icon: 'bx:crown'
    },
    {
      title: 'Cards',
      icon: 'bx:collection',
      children: [
        {
          title: 'Basic',
          path: '/temp/ui/cards/basic'
        },
        {
          title: 'Advanced',
          path: '/temp/ui/cards/advanced'
        },
        {
          title: 'Statistics',
          path: '/temp/ui/cards/statistics'
        },
        {
          title: 'Widgets',
          path: '/temp/ui/cards/widgets'
        },
        {
          title: 'Gamification',
          path: '/temp/ui/cards/gamification'
        },
        {
          title: 'Actions',
          path: '/temp/ui/cards/actions'
        }
      ]
    },
    {
      badgeContent: '19',
      title: 'Components',
      icon: 'bx:box',
      badgeColor: 'primary',
      children: [
        {
          title: 'Accordion',
          path: '/temp/components/accordion'
        },
        {
          title: 'Alerts',
          path: '/temp/components/alerts'
        },
        {
          title: 'Avatars',
          path: '/temp/components/avatars'
        },
        {
          title: 'Badges',
          path: '/temp/components/badges'
        },
        {
          title: 'Buttons',
          path: '/temp/components/buttons'
        },
        {
          title: 'Button Group',
          path: '/temp/components/button-group'
        },
        {
          title: 'Chips',
          path: '/temp/components/chips'
        },
        {
          title: 'Dialogs',
          path: '/temp/components/dialogs'
        },
        {
          title: 'List',
          path: '/temp/components/list'
        },
        {
          title: 'Menu',
          path: '/temp/components/menu'
        },
        {
          title: 'Pagination',
          path: '/temp/components/pagination'
        },
        {
          title: 'Progress',
          path: '/temp/components/progress'
        },
        {
          title: 'Ratings',
          path: '/temp/components/ratings'
        },
        {
          title: 'Snackbar',
          path: '/temp/components/snackbar'
        },
        {
          title: 'Swiper',
          path: '/temp/components/swiper'
        },
        {
          title: 'Tabs',
          path: '/temp/components/tabs'
        },
        {
          title: 'Timeline',
          path: '/temp/components/timeline'
        },
        {
          title: 'Toasts',
          path: '/temp/components/toast'
        },
        {
          title: 'Tree View',
          path: '/temp/components/tree-view'
        },
        {
          title: 'More',
          path: '/temp/components/more'
        },
        {
          title: 'Test',
          path: '/temp/components/test'
        }
      ]
    },
    {
      sectionTitle: 'Forms & Tables'
    },
    {
      title: 'Form Elements',
      icon: 'bx:detail',
      children: [
        {
          title: 'Text Field',
          path: '/temp/forms/form-elements/text-field'
        },
        {
          title: 'Select',
          path: '/temp/forms/form-elements/select'
        },
        {
          title: 'Checkbox',
          path: '/temp/forms/form-elements/checkbox'
        },
        {
          title: 'Radio',
          path: '/temp/forms/form-elements/radio'
        },
        {
          title: 'Custom Inputs',
          path: '/temp/forms/form-elements/custom-inputs'
        },
        {
          title: 'Textarea',
          path: '/temp/forms/form-elements/textarea'
        },
        {
          title: 'Autocomplete',
          path: '/temp/forms/form-elements/autocomplete'
        },
        {
          title: 'Date Pickers',
          path: '/temp/forms/form-elements/pickers'
        },
        {
          title: 'Switch',
          path: '/temp/forms/form-elements/switch'
        },
        {
          title: 'File Uploader',
          path: '/temp/forms/form-elements/file-uploader'
        },
        {
          title: 'Editor',
          path: '/temp/forms/form-elements/editor'
        },
        {
          title: 'Slider',
          path: '/temp/forms/form-elements/slider'
        },
        {
          title: 'Input Mask',
          path: '/temp/forms/form-elements/input-mask'
        },
        {
          title: 'Test',
          path: '/temp/forms/form-elements/test'
        }
      ]
    },
    {
      icon: 'bx:detail',
      title: 'Form Layouts',
      path: '/temp/forms/form-layouts'
    },
    {
      title: 'Form Validation',
      path: '/temp/forms/form-validation',
      icon: 'bx:list-check'
    },
    {
      title: 'Form Wizard',
      path: '/temp/forms/form-wizard',
      icon: 'bx:carousel'
    },
    {
      title: 'Table',
      icon: 'bx:table',
      path: '/temp/tables/mui'
    },
    {
      title: 'Mui DataGrid',
      icon: 'bx:grid',
      path: '/temp/tables/data-grid'
    },
    {
      sectionTitle: 'Charts & Misc'
    },
    {
      title: 'Charts',
      icon: 'bx:chart',
      children: [
        {
          title: 'Apex',
          path: '/temp/charts/apex-charts'
        },
        {
          title: 'Recharts',
          path: '/temp/charts/recharts'
        },
        {
          title: 'ChartJS',
          path: '/temp/charts/chartjs'
        }
      ]
    },
    {
      path: '/temp/acl',
      // action: 'read',
      // subject: 'acl-page',
      icon: 'bx:shield',
      title: 'Access Control'
    },
    {
      title: 'Others',
      icon: 'bx:dots-horizontal-rounded',
      children: [
        {
          title: 'Menu Levels',
          children: [
            {
              title: 'Menu Level 2.1'
            },
            {
              title: 'Menu Level 2.2',
              children: [
                {
                  title: 'Menu Level 3.1'
                },
                {
                  title: 'Menu Level 3.2'
                }
              ]
            }
          ]
        },
        {
          title: 'Disabled Menu',
          disabled: true
        },
        {
          title: 'Raise Support',
          externalLink: true,
          openInNewTab: true,
          path: 'https://themeselection.com/support'
        },
        {
          title: 'Documentation',
          externalLink: true,
          openInNewTab: true,
          path: 'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/documentation/'
        }
      ]
    }
  ]
}

export default navigation

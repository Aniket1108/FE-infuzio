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

    // {
    //   sectionTitle: 'Wallet'
    // },
    // {
    //   title: 'Send',
    //   icon: 'bx:window-open',
    //   path: '/wallet/send-crypto'
    // },
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
          title: 'Faucet',
          path: '/faucet/faucet'
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
      sectionTitle: 'Profile & Security'
    },
    {
      title: 'Profile',
      icon: 'bx:user',
      path: '/settings/account'
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
          path: '/tempRoutes895865fgrc545/dashboards/analytics'
        },
        {
          title: 'CRM',
          path: '/tempRoutes895865fgrc545/dashboards/crm'
        },
        {
          title: 'eCommerce',
          path: '/tempRoutes895865fgrc545/dashboards/ecommerce'
        }
      ]
    },
    {
      sectionTitle: 'Apps & Pages'
    },
    {
      title: 'Email',
      icon: 'bx:envelope',
      path: '/tempRoutes895865fgrc545/apps/email'
    },
    {
      title: 'Chat',
      icon: 'bx:message',
      path: '/tempRoutes895865fgrc545/apps/chat'
    },
    {
      title: 'Calendar',
      icon: 'bx:calendar',
      path: '/tempRoutes895865fgrc545/apps/calendar'
    },
    {
      title: 'Invoice',
      icon: 'bx:food-menu',
      children: [
        {
          title: 'List',
          path: '/tempRoutes895865fgrc545/apps/invoice/list'
        },
        {
          title: 'Preview',
          path: '/tempRoutes895865fgrc545/apps/invoice/preview'
        },
        {
          title: 'Edit',
          path: '/tempRoutes895865fgrc545/apps/invoice/edit'
        },
        {
          title: 'Add',
          path: '/tempRoutes895865fgrc545/apps/invoice/add'
        }
      ]
    },
    {
      title: 'User',
      icon: 'bx:user',
      children: [
        {
          title: 'List',
          path: '/tempRoutes895865fgrc545/apps/user/list'
        },
        {
          title: 'View',
          children: [
            {
              title: 'Account',
              path: '/tempRoutes895865fgrc545/apps/user/view/account'
            },
            {
              title: 'Security',
              path: '/tempRoutes895865fgrc545/apps/user/view/security'
            },
            {
              title: 'Billing & Plans',
              path: '/tempRoutes895865fgrc545/apps/user/view/billing-plan'
            },
            {
              title: 'Notifications',
              path: '/tempRoutes895865fgrc545/apps/user/view/notification'
            },
            {
              title: 'Connection',
              path: '/tempRoutes895865fgrc545/apps/user/view/connection'
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
          path: '/tempRoutes895865fgrc545/apps/roles'
        },
        {
          title: 'Permissions',
          path: '/tempRoutes895865fgrc545/apps/permissions'
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
              path: '/tempRoutes895865fgrc545/pages/user-profile/profile'
            },
            {
              title: 'Teams',
              path: '/tempRoutes895865fgrc545/pages/user-profile/teams'
            },
            {
              title: 'Projects',
              path: '/tempRoutes895865fgrc545/pages/user-profile/projects'
            },
            {
              title: 'Connections',
              path: '/tempRoutes895865fgrc545/pages/user-profile/connections'
            }
          ]
        },
        {
          title: 'Account Settings',
          children: [
            {
              title: 'Account',
              path: '/tempRoutes895865fgrc545/pages/account-settings/account'
            },
            {
              title: 'Security',
              path: '/tempRoutes895865fgrc545/pages/account-settings/security'
            },
            {
              title: 'Billing & Plans',
              path: '/tempRoutes895865fgrc545/pages/account-settings/billing-plan'
            },
            {
              title: 'Notifications',
              path: '/tempRoutes895865fgrc545/pages/account-settings/notifications'
            },
            {
              title: 'Connections',
              path: '/tempRoutes895865fgrc545/pages/account-settings/connections'
            }
          ]
        },
        {
          title: 'FAQ',
          path: '/tempRoutes895865fgrc545/pages/faq'
        },
        {
          title: 'Help Center',
          path: '/tempRoutes895865fgrc545/pages/help-center'
        },
        {
          title: 'Pricing',
          path: '/tempRoutes895865fgrc545/pages/pricing'
        },
        {
          title: 'Miscellaneous',
          children: [
            {
              openInNewTab: true,
              title: 'Coming Soon',
              path: '/tempRoutes895865fgrc545/pages/misc/coming-soon'
            },
            {
              openInNewTab: true,
              title: 'Under Maintenance',
              path: '/tempRoutes895865fgrc545/pages/misc/under-maintenance'
            },
            {
              openInNewTab: true,
              title: 'Page Not Found - 404',
              path: '/tempRoutes895865fgrc545/pages/misc/404-not-found'
            },
            {
              openInNewTab: true,
              title: 'Not Authorized - 401',
              path: '/tempRoutes895865fgrc545/pages/misc/401-not-authorized'
            },
            {
              openInNewTab: true,
              title: 'Server Error - 500',
              path: '/tempRoutes895865fgrc545/pages/misc/500-server-error'
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
              path: '/tempRoutes895865fgrc545/pages/auth/login-v1'
            },
            {
              openInNewTab: true,
              title: 'Login v2',
              path: '/tempRoutes895865fgrc545/pages/auth/login-v2'
            },
            {
              openInNewTab: true,
              title: 'Login With AppBar',
              path: '/tempRoutes895865fgrc545/pages/auth/login-with-appbar'
            }
          ]
        },
        {
          title: 'Register',
          children: [
            {
              openInNewTab: true,
              title: 'Register v1',
              path: '/tempRoutes895865fgrc545/pages/auth/register-v1'
            },
            {
              openInNewTab: true,
              title: 'Register v2',
              path: '/tempRoutes895865fgrc545/pages/auth/register-v2'
            },
            {
              openInNewTab: true,
              title: 'Register Multi-Steps',
              path: '/tempRoutes895865fgrc545/pages/auth/register-multi-steps'
            }
          ]
        },
        {
          title: 'Verify Email',
          children: [
            {
              openInNewTab: true,
              title: 'Verify Email v1',
              path: '/tempRoutes895865fgrc545/pages/auth/verify-email-v1'
            },
            {
              openInNewTab: true,
              title: 'Verify Email v2',
              path: '/tempRoutes895865fgrc545/pages/auth/verify-email-v2'
            }
          ]
        },
        {
          title: 'Forgot Password',
          children: [
            {
              openInNewTab: true,
              title: 'Forgot Password v1',
              path: '/tempRoutes895865fgrc545/pages/auth/forgot-password-v1'
            },
            {
              openInNewTab: true,
              title: 'Forgot Password v2',
              path: '/tempRoutes895865fgrc545/pages/auth/forgot-password-v2'
            }
          ]
        },
        {
          title: 'Reset Password',
          children: [
            {
              openInNewTab: true,
              title: 'Reset Password v1',
              path: '/tempRoutes895865fgrc545/pages/auth/reset-password-v1'
            },
            {
              openInNewTab: true,
              title: 'Reset Password v2',
              path: '/tempRoutes895865fgrc545/pages/auth/reset-password-v2'
            }
          ]
        },
        {
          title: 'Two Steps',
          children: [
            {
              openInNewTab: true,
              title: 'Two Steps v1',
              path: '/tempRoutes895865fgrc545/pages/auth/two-steps-v1'
            },
            {
              openInNewTab: true,
              title: 'Two Steps v2',
              path: '/tempRoutes895865fgrc545/pages/auth/two-steps-v2'
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
          path: '/tempRoutes895865fgrc545/pages/wizard-examples/checkout'
        },
        {
          title: 'Property Listing',
          path: '/tempRoutes895865fgrc545/pages/wizard-examples/property-listing'
        },
        {
          title: 'Create Deal',
          path: '/tempRoutes895865fgrc545/pages/wizard-examples/create-deal'
        }
      ]
    },
    {
      icon: 'bx:window-open',
      title: 'Dialog Examples',
      path: '/tempRoutes895865fgrc545/pages/dialog-examples'
    },
    {
      sectionTitle: 'User Interface'
    },
    {
      title: 'Typography',
      icon: 'bx:text',
      path: '/tempRoutes895865fgrc545/ui/typography'
    },
    {
      title: 'Icons',
      path: '/tempRoutes895865fgrc545/ui/icons',
      icon: 'bx:crown'
    },
    {
      title: 'Icons Test',
      path: '/tempRoutes895865fgrc545/ui/icons-test',
      icon: 'bx:crown'
    },
    {
      title: 'Cards',
      icon: 'bx:collection',
      children: [
        {
          title: 'Basic',
          path: '/tempRoutes895865fgrc545/ui/cards/basic'
        },
        {
          title: 'Advanced',
          path: '/tempRoutes895865fgrc545/ui/cards/advanced'
        },
        {
          title: 'Statistics',
          path: '/tempRoutes895865fgrc545/ui/cards/statistics'
        },
        {
          title: 'Widgets',
          path: '/tempRoutes895865fgrc545/ui/cards/widgets'
        },
        {
          title: 'Gamification',
          path: '/tempRoutes895865fgrc545/ui/cards/gamification'
        },
        {
          title: 'Actions',
          path: '/tempRoutes895865fgrc545/ui/cards/actions'
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
          path: '/tempRoutes895865fgrc545/components/accordion'
        },
        {
          title: 'Alerts',
          path: '/tempRoutes895865fgrc545/components/alerts'
        },
        {
          title: 'Avatars',
          path: '/tempRoutes895865fgrc545/components/avatars'
        },
        {
          title: 'Badges',
          path: '/tempRoutes895865fgrc545/components/badges'
        },
        {
          title: 'Buttons',
          path: '/tempRoutes895865fgrc545/components/buttons'
        },
        {
          title: 'Button Group',
          path: '/tempRoutes895865fgrc545/components/button-group'
        },
        {
          title: 'Chips',
          path: '/tempRoutes895865fgrc545/components/chips'
        },
        {
          title: 'Dialogs',
          path: '/tempRoutes895865fgrc545/components/dialogs'
        },
        {
          title: 'List',
          path: '/tempRoutes895865fgrc545/components/list'
        },
        {
          title: 'Menu',
          path: '/tempRoutes895865fgrc545/components/menu'
        },
        {
          title: 'Pagination',
          path: '/tempRoutes895865fgrc545/components/pagination'
        },
        {
          title: 'Progress',
          path: '/tempRoutes895865fgrc545/components/progress'
        },
        {
          title: 'Ratings',
          path: '/tempRoutes895865fgrc545/components/ratings'
        },
        {
          title: 'Snackbar',
          path: '/tempRoutes895865fgrc545/components/snackbar'
        },
        {
          title: 'Swiper',
          path: '/tempRoutes895865fgrc545/components/swiper'
        },
        {
          title: 'Tabs',
          path: '/tempRoutes895865fgrc545/components/tabs'
        },
        {
          title: 'Timeline',
          path: '/tempRoutes895865fgrc545/components/timeline'
        },
        {
          title: 'Toasts',
          path: '/tempRoutes895865fgrc545/components/toast'
        },
        {
          title: 'Tree View',
          path: '/tempRoutes895865fgrc545/components/tree-view'
        },
        {
          title: 'More',
          path: '/tempRoutes895865fgrc545/components/more'
        },
        {
          title: 'Test',
          path: '/tempRoutes895865fgrc545/components/test'
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
          path: '/tempRoutes895865fgrc545/forms/form-elements/text-field'
        },
        {
          title: 'Select',
          path: '/tempRoutes895865fgrc545/forms/form-elements/select'
        },
        {
          title: 'Checkbox',
          path: '/tempRoutes895865fgrc545/forms/form-elements/checkbox'
        },
        {
          title: 'Radio',
          path: '/tempRoutes895865fgrc545/forms/form-elements/radio'
        },
        {
          title: 'Custom Inputs',
          path: '/tempRoutes895865fgrc545/forms/form-elements/custom-inputs'
        },
        {
          title: 'Textarea',
          path: '/tempRoutes895865fgrc545/forms/form-elements/textarea'
        },
        {
          title: 'Autocomplete',
          path: '/tempRoutes895865fgrc545/forms/form-elements/autocomplete'
        },
        {
          title: 'Date Pickers',
          path: '/tempRoutes895865fgrc545/forms/form-elements/pickers'
        },
        {
          title: 'Switch',
          path: '/tempRoutes895865fgrc545/forms/form-elements/switch'
        },
        {
          title: 'File Uploader',
          path: '/tempRoutes895865fgrc545/forms/form-elements/file-uploader'
        },
        {
          title: 'Editor',
          path: '/tempRoutes895865fgrc545/forms/form-elements/editor'
        },
        {
          title: 'Slider',
          path: '/tempRoutes895865fgrc545/forms/form-elements/slider'
        },
        {
          title: 'Input Mask',
          path: '/tempRoutes895865fgrc545/forms/form-elements/input-mask'
        },
        {
          title: 'Test',
          path: '/tempRoutes895865fgrc545/forms/form-elements/test'
        }
      ]
    },
    {
      icon: 'bx:detail',
      title: 'Form Layouts',
      path: '/tempRoutes895865fgrc545/forms/form-layouts'
    },
    {
      title: 'Form Validation',
      path: '/tempRoutes895865fgrc545/forms/form-validation',
      icon: 'bx:list-check'
    },
    {
      title: 'Form Wizard',
      path: '/tempRoutes895865fgrc545/forms/form-wizard',
      icon: 'bx:carousel'
    },
    {
      title: 'Table',
      icon: 'bx:table',
      path: '/tempRoutes895865fgrc545/tables/mui'
    },
    {
      title: 'Mui DataGrid',
      icon: 'bx:grid',
      path: '/tempRoutes895865fgrc545/tables/data-grid'
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
          path: '/tempRoutes895865fgrc545/charts/apex-charts'
        },
        {
          title: 'Recharts',
          path: '/tempRoutes895865fgrc545/charts/recharts'
        },
        {
          title: 'ChartJS',
          path: '/tempRoutes895865fgrc545/charts/chartjs'
        }
      ]
    },
    {
      path: '/tempRoutes895865fgrc545/acl',
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

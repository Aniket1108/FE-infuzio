import { CurrencyBitcoin, AddLinkOutlined, DashboardCustomizeOutlined, MonetizationOnOutlined, ManageAccountsOutlined, SmartDisplayOutlined } from '@mui/icons-material';

const menuList = [
    {
        name: 'Dashboard',
        route: 'overview',
        isSubMenuOpen: false,
        icon: <DashboardCustomizeOutlined />
    },
    {
        name: 'Earn ',
        submenus: [
            {
                name: 'Locked staking',
                route: 'locked-staking',
                icon: <SmartDisplayOutlined />
            },
            {
                name: 'Flexible staking',
                route: 'flexible-staking',
                icon: <SmartDisplayOutlined />
            }
        ],
        isSubMenuOpen: false,
        icon: <MonetizationOnOutlined />
    },
    {
        name: 'Faucet',
        submenus: [
            {
                name: 'PTC',
                route: 'ptc',
                icon: <SmartDisplayOutlined />
            },
            {
                name: 'Shortlink',
                route: 'shortlink',
                icon: <AddLinkOutlined />
            },
        ],
        isSubMenuOpen: false,
        icon: <CurrencyBitcoin />
    },
    {
        name: 'Profile',
        route: 'profile',
        isSubMenuOpen: false,
        icon: <ManageAccountsOutlined />
    }
]

export default menuList
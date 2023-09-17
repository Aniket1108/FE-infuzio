import { AddLinkOutlined, DashboardCustomizeOutlined, MonetizationOnOutlined, ManageAccountsOutlined, SmartDisplayOutlined } from '@mui/icons-material';

const menuList = [
    {
        name: 'Dashboard',
        route: 'overview',
        isSubMenuOpen: false,
        icon: <DashboardCustomizeOutlined />
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
        icon: <MonetizationOnOutlined />
    },
    {
        name: 'Profile',
        route: 'profile',
        isSubMenuOpen: false,
        icon: <ManageAccountsOutlined />
    }
]

export default menuList
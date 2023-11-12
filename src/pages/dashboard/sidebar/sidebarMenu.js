import { CurrencyBitcoin, AddLinkOutlined, DashboardCustomizeOutlined, MonetizationOnOutlined, ManageAccountsOutlined, SmartDisplayOutlined } from '@mui/icons-material';

const menuList = [
    {
        name: 'Dashboard',
        route: 'overview',
        isSubMenuOpen: false,
        icon: <DashboardCustomizeOutlined />
    },
    // {
    //     name: 'Earn ',
    //     submenus: [
    //         {
    //             name: 'Locked staking',
    //             route: 'locked-staking',
    //             icon: <SmartDisplayOutlined />
    //         },
    //         {
    //             name: 'Flexible staking',
    //             route: 'flexible-staking',
    //             icon: <SmartDisplayOutlined />
    //         }
    //     ],
    //     isSubMenuOpen: false,
    //     icon: <MonetizationOnOutlined />
    // },
    {
        name: 'Faucet',
        submenus: [
            {
                name: 'Overview',
                route: 'faucet/overview',
                icon: <AddLinkOutlined />
            },
            // {
            //     name: 'PTC',
            //     route: 'ptc',
            //     icon: <SmartDisplayOutlined />
            // },
            {
                name: 'Shortlinks',
                route: 'faucet/shortlinks',
                icon: <AddLinkOutlined />
            },
            {
                name: 'Offerwalls',
                route: 'faucet/offerwalls',
                icon: <AddLinkOutlined />
            },
            {
                name: 'Challenges',
                route: 'faucet/challenges',
                icon: <AddLinkOutlined />
            },
        ],
        isSubMenuOpen: true,
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
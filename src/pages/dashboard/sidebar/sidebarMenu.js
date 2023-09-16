const menuList = [
    {
        name: 'Dashboard',
        route: 'overview',
        isSubMenuOpen: false,
    },
    {
        name: 'Faucet',
        submenus: [
            {
                name: 'PTC',
                route: 'ptc'
            },
            {
                name: 'Shortlink',
                route: 'shortlink'
            },
        ],
        isSubMenuOpen: false,
    },
    {
        name: 'Profile',
        route: 'profile',
        isSubMenuOpen: false,
    }
]

export default menuList
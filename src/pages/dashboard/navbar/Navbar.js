import React from 'react'

import { ManageAccountsOutlined, Menu } from '@mui/icons-material';
import UserDropdown from './UserDropdown';

import './navbar.scss'
const Navbar = ({ showSidebar, setShowSidebar }) => {
  return (
    <div id='navbar__main'>
      <div className='menu__toggle' onClick={() => {
        setShowSidebar(!showSidebar)
      }}>
        <Menu sx={{ fontSize: 30 }} />
      </div>

      <div className='menu__items'>
        <div>
          {/* dark and light mode button */}
        </div>

        <div>
          {/* <ManageAccountsOutlined sx={{ fontSize: 30 }} /> */}
          <UserDropdown />
        </div>
      </div>
    </div>
  )
}

export default Navbar
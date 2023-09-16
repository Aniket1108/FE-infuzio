import { useState } from 'react';

import sidebarMenu from './sidebarMenu';

import { KeyboardArrowDownOutlined, KeyboardArrowUpOutlined } from '@mui/icons-material'; // Import Material Icons

import './sidebar.scss';
const Sidebar = ({ showSidebar }) => {
  const [menuList, setMenuList] = useState(sidebarMenu);

  const toggleSubMenu = (index) => {
    const updatedMenuList = [...menuList];
    updatedMenuList[index].isSubMenuOpen = !updatedMenuList[index].isSubMenuOpen;
    setMenuList(updatedMenuList);
  };


  const sidebarStyle = {
    transform: showSidebar ? 'translateX(0)' : 'translateX(-250px)', // Adjust the transform property based on showSidebar
  };

  return (
    <div id="sidebar__main" style={sidebarStyle}>
      <ul>
        {menuList.map((menuItem, index) => (
          <li key={index}>
            <span onClick={() => toggleSubMenu(index)}>
              {menuItem.name}
              {menuItem.submenus && (
                <span>
                  {menuItem.isSubMenuOpen ? (
                    <KeyboardArrowUpOutlined /> // Material Icons arrow up when submenu is open
                  ) : (
                    <KeyboardArrowDownOutlined /> // Material Icons arrow down when submenu is closed
                  )}
                </span>
              )}
            </span>
            {menuItem.isSubMenuOpen && menuItem.submenus && (
              <ul>
                {menuItem.submenus.map((submenuItem, subIndex) => (
                  <li key={subIndex}>
                    <a href={submenuItem.route}>{submenuItem.name}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

import { useState } from 'react';
import { useNavigate, NavLink, useLocation } from 'react-router-dom'; // Import NavLink
import sidebarMenu from './sidebarMenu';
import { KeyboardArrowDownOutlined, KeyboardArrowUpOutlined, Opacity } from '@mui/icons-material';
import './sidebar.scss';

const Sidebar = ({ showSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  const [menuList, setMenuList] = useState(sidebarMenu);

  const toggleSubMenu = (index) => {
    const updatedMenuList = [...menuList];
    updatedMenuList[index].isSubMenuOpen = !updatedMenuList[index].isSubMenuOpen;
    setMenuList(updatedMenuList);
  };

  const sidebarStyle = {
    transform: showSidebar ? 'translateX(0)' : 'translateX(-250px)',
  };

  return (
    <div id="sidebar__main" style={sidebarStyle}>
      <div>
        {menuList.map((menuItem, index) => (
          <div key={index}>
            {menuItem.submenus && (
              <div
                className={`menu__list ${location.pathname === menuItem.route ? 'active' : ''}`} // Check if the route matches the current location
                onClick={() => toggleSubMenu(index)}
              >
                {menuItem.name}
                {menuItem.submenus && (
                  <div>
                    {menuItem.isSubMenuOpen ? (
                      <KeyboardArrowUpOutlined />
                    ) : (
                      <KeyboardArrowDownOutlined />
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Render the main menu item as a NavLink if no submenus */}
            {!menuItem.submenus && (
              <NavLink
                className={`menu__list custom__link ${location.pathname === menuItem.route ? 'active' : ''}`} // Check if the route matches the current location
                to={menuItem.route}
              >
                {menuItem.name}
              </NavLink>
            )}

            {menuItem.isSubMenuOpen && menuItem.submenus && (
              <div className='submenu'>
                {menuItem.submenus.map((submenuItem, subIndex) => (
                  <NavLink
                    className={`submenu__list custom__link ${location.pathname === submenuItem.route ? 'active' : ''}`} // Check if the route matches the current location
                    key={subIndex}
                    to={submenuItem.route}
                  >
                    <span style={{ opacity: '0.8' }}>
                      {submenuItem.name}
                    </span>
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

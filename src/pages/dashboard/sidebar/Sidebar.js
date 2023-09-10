import React from 'react';
import './sidebar.scss';

const Sidebar = ({ showSidebar }) => {
  const sidebarStyle = {
    transform: showSidebar ? 'translateX(0)' : 'translateX(-250px)', // Adjust the transform property based on showSidebar
  };

  return (
    <div id="sidebar__main" style={sidebarStyle}>
      Sidebar
    </div>
  );
};

export default Sidebar;

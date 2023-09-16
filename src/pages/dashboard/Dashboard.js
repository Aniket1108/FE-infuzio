import React, { useState, useEffect } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import Navbar from './navbar/Navbar';
import Sidebar from './sidebar/Sidebar';
import Overview from './dashboardPages/overview';
import Profile from './dashboardPages/profile'

import { Divider } from '@mui/material';

import "./dashboard.scss";
const Dashboard = () => {

  const [showSidebar, setShowSidebar] = useState(true);

  // Function to toggle the sidebar visibility
  const toggleSidebar = () => {
    if (window.innerWidth <= 720) {
      setShowSidebar(false);
    } else {
      setShowSidebar(true);
    }
  };

  // Use useEffect to add event listeners on component mount and unmount
  useEffect(() => {
    toggleSidebar(); // Initial check
    window.addEventListener('resize', toggleSidebar);

    return () => {
      window.removeEventListener('resize', toggleSidebar);
    };
  }, []);

  return (
    <div id="dashboard__layout">
      {showSidebar && (
        <><Sidebar showSidebar={showSidebar} /></>
      )}
      <div className='dashboard__content'>
        <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

        <Divider />
        
        <Routes>
          <Route path='/' element={<Outlet />}>
            <Route index element={<Overview />} />

            <Route path='profile' element={<Profile />} />

          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;

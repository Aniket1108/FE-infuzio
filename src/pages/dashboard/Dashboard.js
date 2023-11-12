import React, { useState, useEffect } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import Navbar from './navbar/Navbar';
import Sidebar from './sidebar/Sidebar';
import Overview from './dashboardPages/overview';
import Profile from './dashboardPages/profile'

import Offerwalls from './dashboardPages/faucet/offerwalls/CardNavigation';
import Challenges from './dashboardPages/faucet/challenges/CardNavigation';
import Shortlinks from './dashboardPages/faucet/shortlink/CardNavigation';

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

        <div className='dashboard__page'>
          <Routes>
            <Route path='/' element={<Outlet />}>
              <Route index element={<Overview />} />

              <Route path='overview' element={<Overview />} />
              <Route path='profile' element={<Profile />} />

              <Route path='faucet/offerwalls' element={<Offerwalls />} />
              <Route path='faucet/challenges' element={<Challenges />} />
              <Route path='faucet/shortlinks' element={<Shortlinks />} />


            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

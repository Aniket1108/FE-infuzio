import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import Navbar from './navbar/Navbar';
import Sidebar from './sidebar/Sidebar';
import Overview from './dashboardPages/overview';
import Profile from './dashboardPages/profile'

import "./dashboard.scss";

const Dashboard = () => {
  return (
    <div id="dashboard__layout">
      <Navbar />
      <div className='dashboard__content'>
        <Sidebar />

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

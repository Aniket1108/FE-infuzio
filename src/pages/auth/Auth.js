import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import LogIn from './LogIn';
import SignUp from './SignUp';

import './auth.scss'
const index = () => {
  return (
    <div id="auth__layout">
      <Routes>
        <Route path='/' element={<Outlet />}>
          <Route index element={<LogIn />} />

          <Route path='login' element={<LogIn />} />
          <Route path='signup' element={<SignUp />} />
          
        </Route>
      </Routes>
    </div>
  )
}

export default index
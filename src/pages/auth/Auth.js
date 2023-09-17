import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import SignIn from './SignIn';
import SignUp from './SignUp';

import './auth.scss'
const index = () => {
  return (
    <div id="auth__layout">
      <Routes>
        <Route path='/' element={<Outlet />}>
          <Route index element={<SignIn />} />

          <Route path='sign-in' element={<SignIn />} />
          <Route path='sign-up' element={<SignUp />} />
          
        </Route>
      </Routes>
    </div>
  )
}

export default index
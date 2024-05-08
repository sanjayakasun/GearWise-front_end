import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from '../Components/Sidebar/M_Sidebar';
import Profile from './Profile';
import M_Dashboard from './M_Dashboard';
import Logout from './Logout';


const Moderator_dash = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<M_Dashboard />} />
          <Route path="/dashboard" element={<M_Dashboard />} />
          <Route path="/profile" element={<Profile />} />


        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default Moderator_dash;
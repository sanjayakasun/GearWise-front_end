import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from '../Components/Sidebar/M_Sidebar';
import Profile from './Profile';
import Logout from './Logout';
import MDashboard from './MDashboard';


const Moderator_dash = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/dashboard" element={<MDashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default Moderator_dash;
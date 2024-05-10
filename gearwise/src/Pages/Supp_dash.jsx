import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from '../Components/Sidebar/Sidebar';
import Advertisment from './Advertisment';
import Profile from './Profile';
import Dashboard from './Dashboard';


const Supp_dash = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/advertisment" element={<Advertisment />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default Supp_dash;
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar.js';
import Dashboard from './Pages/Dashboard.jsx';
import Advertisment from './Pages/Advertisment.jsx';
import Profile from './Pages/Profile.jsx';

const App = () => {
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

export default App;
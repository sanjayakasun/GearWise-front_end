import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route, Router, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Aboutus_page from './Pages/Aboutus_page';
import Service_page from './Pages/Service_page';
import Packages_page from './Pages/Packages_page';
import Contact from './Pages/Contactuspage';
import Ad_page from './Pages/Ad_page';
import Queue_page from './Pages/Queue_page';
import Profile from './Components/Profile/Profile';
import Profile_page from './Pages/Profile_page';
import Profilevehicle from './Components/Profilevehicle/Profilevehicle';
import MDashboard from './Pages/MDashboard';
import Reviewsfromdb from './Components/Reviews/Reviewsfromdb';
import Vehicle_history from './Pages/Vehicle_history';

const App = () => {
  return (
    <div className="">
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<Aboutus_page/>} />
        <Route path="/Service" element={<Service_page/>} />
        <Route path="/Packages" element={<Packages_page/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Advertistments" element={<Ad_page/>} />
        <Route path="/Queue" element={<Queue_page/>} />
        <Route path="/Profile" element={<Profile_page/>} />
        <Route path="/dashboard" element={<MDashboard />} />
        <Route path="/Vehicle_history" element={<Vehicle_history />} />
        <Route path="/Reviews" element={<Reviewsfromdb />} />
      </Routes>
      </BrowserRouter>
 
      
    </div>
  );
};

export default App;
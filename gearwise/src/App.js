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
import Reviewsfromdb from './Components/Reviews/Reviewsfromdb';
import Appointments from './Components/Appoinment.jsx';

import Admin_dash from './Pages/Admin_dash.jsx';
import Moderator_dash from './Pages/Moderator_dash.jsx';

import Admin_appoinment from './Pages/Admin_appoinment.jsx';
import Admin_alert from './Pages/Admin_alert.jsx';
import Admin_cus from './Pages/Admin_cus.jsx';
import Admin_rew from './Pages/Admin_rew.jsx';
import Admin_product from './Pages/Admin_product.jsx';
import Admin_ad from './Pages/Admin_ad.jsx';
import Moderator_alert from './Pages/Moderator_alert.jsx';

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
        <Route path="/profile" element={<Profile />} />
        <Route path="/Reviews" element={<Reviewsfromdb />} />
        <Route path="/Appointment" element={<Appointments />} />
        <Route path="/Admin" element={<Admin_dash />} />
        <Route path="/customer" element={<Admin_cus />} />
       <Route path="/review" element={<Admin_rew />} />
       <Route path="/appoinment" element={<Admin_appoinment />} />
       <Route path="/advertisment" element={<Admin_ad />} />
       <Route path="/product" element={<Admin_product />} />
       <Route path="/alert" element={<Admin_alert />} />
       <Route path="/moderator" element={<Moderator_dash />} />
       <Route path="/mAlert" element={<Moderator_alert />} />


        
      
      </Routes>
      </BrowserRouter>
 
      
    </div>
  );
};

export default App;
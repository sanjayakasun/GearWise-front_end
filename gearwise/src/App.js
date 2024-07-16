import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter,Route, Router, Routes,useLocation} from 'react-router-dom';
import Home from './Pages/Home';
import Aboutus_page from './Pages/Aboutus_page';
import Service_page from './Pages/Service_page';
import Packages_page from './Pages/Packages_page';
import Contact from './Pages/Contactuspage';
import Ad_page from './Pages/Ad_page';
import Queue_page from './Pages/Queue_page';
import Profile from './Components/Profile/Profile.js';
import Profile_page from './Pages/Profile_page.js';
import Profilevehicle from './Components/Profilevehicle/Profilevehicle';
// import Reviewsfromdb from './Components/Reviews/Reviewsfromdb';
import Appointments_admin from './Components/Appoinment.jsx';
import Vehicle_history from './Pages/Vehicle_history';
import Review from './Pages/Review';
import Appointments from './Pages/Appointments';
import Viewappointment from './Pages/Viewappointment';
import Rewardpage from './Pages/Rewardpage';
import Admin_dash from './Pages/Admin_dash.jsx';
import Moderator_dash from './Pages/Moderator_dash.jsx';
import Admin_appoinment from './Pages/Admin_appoinment.jsx';
import Admin_alert from './Pages/Admin_alert.jsx';
import Admin_cus from './Pages/Admin_cus.jsx';
import Admin_rew from './Pages/Admin_rew.jsx';
import Admin_product from './Pages/Admin_product.jsx';
import Admin_ad from './Pages/Admin_ad.jsx';
import Moderator_alert from './Pages/Moderator_alert.jsx';
import Supp_dash from './Pages/Supp_dash.jsx';
import Supp_ad from './Pages/Supp_ad.jsx';
import Profile1 from './Components/Profile/Profile.js';
import Mod_Product from './Pages/Mod_Product.jsx';
import Login from './Pages/Login/index.jsx'
import Signup from './Pages/Signup/index.jsx'
import Charts from './Components/Charts/Charts.js';

const App = () => {
  const [user, setUser] = useState(null);
  //google oauth
  const getUser = async () => {
    try {
      const url = `${"http://localhost:4005"}/auth/login/success`;
      const { data } = await axios.get(url, { withCredentials: true });
      setUser(data.user._json);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    //google oauth switch
    getUser();
  }, []);


  return (
    <div className="">
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/About" element={<Aboutus_page/>} />
        <Route path="/Service" element={<Service_page/>} />
        <Route path="/Packages" element={<Packages_page/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Advertistments" element={<Ad_page/>} />
        <Route path="/AppointmentList" element={<Viewappointment/>} />
        <Route path="/Profile" element={<Profile_page/>} />
         
        <Route path="/Profile" element={<Profile />} />
        {/* <Route path="/dashboard" element={<MDashboard />} /> */}
        <Route path="/chart" element={<Charts />} />
        <Route path="/Vehicle_history" element={<Vehicle_history />} />
        <Route path="/Review" element={<Review />} />
        <Route path="/Review" element={<Review />} />
        <Route path="/Appointment" element={<Appointments />} />
        <Route path="/Admin" element={<Admin_dash />} />
        <Route path="/customer" element={<Admin_cus />} />
       <Route path="/areview" element={<Admin_rew />} />
       <Route path="/appoinment_admin" element={<Admin_appoinment />} />
       <Route path="/advertisment" element={<Admin_ad />} />
       <Route path="/product" element={<Admin_product />} />
       <Route path="/alert" element={<Admin_alert />} />
       <Route path="/moderator" element={<Moderator_dash />} />
       <Route path="/mAlert" element={<Moderator_alert />} />
       <Route path="/supp" element={<Supp_dash />} />
       <Route path="/upload_ad" element={<Supp_ad />} />
        <Route path="/Reward" element={<Rewardpage />} /> 
        <Route path="/MProduct" element={<Mod_Product />} /> 

      </Routes>
      </BrowserRouter>
 
      
    </div>
  );
};

export default App;
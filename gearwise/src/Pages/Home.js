import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import Topbar from '../Components/Topbar/Topbar';
import Navbar from '../Components/Navbar/Navbar';
import Aboutus from '../Components/Aboutus/Aboutus';
import Service from '../Components/Service/Service';
import Packages from '../Components/Packages/Packages';
import Location from '../Components/Location/Location';
// import Reviews from '../Components/Reviews/Reviews';
import Test from '../Components/Carousel/Test';
import 'bootstrap/dist/css/bootstrap.min.css';
import Advertistments from '../Components/Advertistments/Advertistments';
import Fotter from '../Components/Fotter/Fotter';
import Review from '../Components/Review/Review';
import Tabs from '../Components/Tabs/Tabs';
// import Upbutton from '../Components/Upbutton/Upbutton';
// import Appointmentbtn from '../Components/Appoinmentbtn/Appointmentbtn';
import Rewarding from '../Components/Rewarding/Rewarding';


export default function Home() {
  const location = useLocation();
  const customerId = location.state?.customerId;
  // const [customerId, setCustomerId] = location.state?.customerId;
  console.log("cusid",customerId)

  const handleLogout = () => {
    // setCustomerId(null);
    customerId = "";
  };
  return (
    <div>
      <Topbar/>
        <Navbar customerId={customerId} onLogout={handleLogout} />
        <Test/>
        <Tabs/>
        <Aboutus/>
        <Service/>
        <Packages/>
        {/* <Rewarding/> */}
        <Location/>
        <Review/>
        {/* <Reviews/> */}
        <Advertistments/>
        <Fotter/>
        {/* <Upbutton/> */}
    </div>
  )
}

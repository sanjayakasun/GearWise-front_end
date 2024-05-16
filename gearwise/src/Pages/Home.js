import React from 'react'
import Topbar from '../Components/Topbar/Topbar';
import Navbar from '../Components/Navbar/Navbar';
import Aboutus from '../Components/Aboutus/Aboutus';
import Service from '../Components/Service/Service';
import Packages from '../Components/Packages/Packages';
import Location from '../Components/Location/Location';
import Reviews from '../Components/Reviews/Reviews';
import Test from '../Components/Carousel/Test';
import 'bootstrap/dist/css/bootstrap.min.css';
import Advertistments from '../Components/Advertistments/Advertistments';
import Fotter from '../Components/Fotter/Fotter';
import Upbutton from '../Components/Upbutton/Upbutton';
import Appointmentbtn from '../Components/Appoinmentbtn/Appointmentbtn';
import Rewarding from '../Components/Rewarding/Rewarding';


export default function Home() {
  return (
    <div>
      <Topbar/>
        <Navbar/>
        <Test/>
        <Aboutus/>
        <Service/>
        <Packages/>
        <Rewarding/>
        <Location/>
        <Reviews/>
        <Advertistments/>
        <Fotter/>
        <Upbutton/>
    </div>
  )
}

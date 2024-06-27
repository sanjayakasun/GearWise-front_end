import React from 'react'
import Topbar from '../Components/Topbar/Topbar'
import Navbar from '../Components/Navbar/Navbar'
import Pageheader from '../Components/Pageheader/Pageheader'
import Aboutus from '../Components/Aboutus/Aboutus'
import Fotter from '../Components/Fotter/Fotter'
import Review from '../Components/Review/Review'
// import Appointmentbtn from '../Appoinmentbtn/Appointmentbtn'


export default function Aboutus_page() {
    
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <Pageheader/>
      {/* <Appointmentbtn/>            */}
      <Review/>
      {/* <Aboutus/> */}
      <Fotter/>
    </div>
  )
}

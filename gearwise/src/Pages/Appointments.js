import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Topbar from '../Components/Topbar/Topbar'
import Pageheader from '../Components/Pageheader/Pageheader'
import Fotter from '../Components/Fotter/Fotter'
import Contactinfo from '../Components/Appointmentform/Contactinfo'
import Vehicleinfo from '../Components/Appointmentform/Vehicleinfo'
import Serviceinfo from '../Components/Appointmentform/Serviceinfo'
import Packages from '../Components/Packages/Packages'
import Timeslot from '../Components/Appointmentform/Timeslot'
import Appointmentbtn from '../Components/Appoinmentbtn/Appointmentbtn'

export default function Appointments() {
  return (
    <div>
    <Topbar/>
    <Navbar/>
    <Pageheader/>
    <Contactinfo/>
    <br/>
    <Vehicleinfo/>
    <br/>
    <Serviceinfo/>
    <br/>
    <Timeslot/>
    <br/>
    <Appointmentbtn/>
    <Fotter/>

    </div>
  )
}
import React from 'react'
import Topbar from '../Components/Topbar/Topbar'
import Navbar from '../Components/Navbar/Navbar'
import Pageheader from '../Components/Pageheader/Pageheader'
import Accordioncomp from '../Components/Accordion/Accordioncomp'
import Fotter from '../Components/Fotter/Fotter'


export default function Viewappointment() {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <Pageheader/>
      <Accordioncomp/>
      <Fotter/>
    </div>
  )
}

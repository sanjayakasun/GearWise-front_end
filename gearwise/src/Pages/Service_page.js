import React from 'react'
import Topbar from '../Components/Topbar/Topbar'
import Navbar from '../Components/Navbar/Navbar'
import Pageheader from '../Components/Pageheader/Pageheader'
import Service from '../Components/Service/Service'
import Fotter from '../Components/Fotter/Fotter'

export default function Service_page() {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <Pageheader/>
      <Service/>
      <Fotter/>
    </div>
  )
}

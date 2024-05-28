import React from 'react'
import Contact from '../Components/Contact/Contact'
import Topbar from '../Components/Topbar/Topbar'
import Navbar from '../Components/Navbar/Navbar'
import Pageheader from '../Components/Pageheader/Pageheader'
import Fotter from '../Components/Fotter/Fotter'
import Profile1 from '../Components/Profile/Profile'
import Rewarding from '../Components/Rewarding/Rewarding'

export default function Contactuspage() {
  return (
    <div>
        <Topbar/>
        <Navbar/>
        <Pageheader/>
       {/* <Profile1/> */}
       <Profile1/>
        
      
      <Fotter/>
    </div>
  )
}

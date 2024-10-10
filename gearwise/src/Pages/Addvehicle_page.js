import React from 'react'
import Contact from '../Components/Contact/Contact'
import Topbar from '../Components/Topbar/Topbar'
import Navbar from '../Components/Navbar/Navbar'
import Pageheader from '../Components/Pageheader/Pageheader'
import Fotter from '../Components/Fotter/Fotter'
import Profile1 from '../Components/Profile/Profile'
import Rewarding from '../Components/Rewarding/Rewarding'
import Addvehicle from '../Components/Addvehicle/Addvehicle'

export default function Addvehicle_page() {
    return (
        <div>
            <Topbar />
            <Navbar />
            <br/>
            <center>
            <h1>Add Your Vehicle Information </h1>
            <p style={{color:'red'}}>Add Your Vehicle information for Easy Make of Appointments by just one click !</p>
            </center>
            <br/>
            <Addvehicle />


            <Fotter />
        </div>
    )
}

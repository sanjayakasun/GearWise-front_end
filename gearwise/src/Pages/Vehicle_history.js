import React from 'react';
import Topbar from '../Components/Topbar/Topbar'
import Navbar from '../Components/Navbar/Navbar'
import Pageheader from '../Components/Pageheader/Pageheader'
import Aboutus from '../Components/Aboutus/Aboutus'
import Fotter from '../Components/Fotter/Fotter'
import Profilevehicle from '../Components/Profilevehicle/Profilevehicle';
import Profilesidebar from '../Components/Profilesidebar/Profilesidebar';
 

const Vehicle_history = () => {
  return (
    <div>
        <Topbar/>
        <Navbar/>
        <Pageheader/>
       {/* <Profile1/> */}
       <Profilevehicle/>
        
      
      <Fotter/>
    </div>
  )
};

export default Vehicle_history;
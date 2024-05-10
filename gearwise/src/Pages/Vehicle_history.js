import React from 'react';
import Topbar from '../Components/Topbar/Topbar'
import Navbar from '../Components/Navbar/Navbar'
import Pageheader from '../Components/Pageheader/Pageheader'
import Aboutus from '../Components/Aboutus/Aboutus'
import Fotter from '../Components/Fotter/Fotter'
import Profilevehicle from '../Components/Profilevehicle/Profilevehicle';
import Profilesidebar from '../Components/Profilesidebar/Profilesidebar';
import Profile from '../Components/Profile/Profile'

const Vehicle_history = () => {
    return (
        // <div className='boddy'>
        // <div className='  container-fluid'>
          <div className='row'>
            <div className='col-2'>
              <Profilesidebar />
            </div>
            <div className='col-10 row'>
    
              <div className='sticky-top'>
                
               <Navbar/>          
                   
              </div>
              <div className='mt-6'>
                {/* <Profile /> */}
                <Profilevehicle/>
              </div>
    <Fotter/> 
            </div>
          </div>
        // </div>
    
        // </div>
    );
};

export default Vehicle_history;
import React from 'react'
import M_alert from '../Components/M_alert';
import M_Sidebar from '../Components/Sidebar/M_Sidebar'


export default function Moderator_alert() {

  return (
<div className='bodd'>
    <div className='  container-fluid'>
      <div className='row'>
        <div className='col-2'>
          <M_Sidebar />
        </div>
        <div className='col-10 row'>

          <div className='sticky-top'>
            
           {/* <Navbar/>           */}
               
          </div>
          <div className=' mt-5'>
            <M_alert />
          </div>
{/* <Fotter/> */}
        </div>
      </div>
    </div>

    </div>
   
  )
}
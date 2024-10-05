import React from 'react'
import M_Sidebar from '../Components/Sidebar/M_Sidebar';
import M_mail from '../Components/M_mail';



export default function Admin_alert() {

  return (
<div className='bodd'>
    <div className='  container-fluid'>
      <div className='row'>
        <div className='col-2'>
          <M_Sidebar/>
        </div>
        <div className='col-10 row'>

          <div className='sticky-top'>
            
           {/* <Navbar/>           */}
               
          </div>
          <div className='mt-5'>
            <M_mail />
          </div>
{/* <Fotter/> */}
        </div>
      </div>
    </div>

    </div>
   
  )
}
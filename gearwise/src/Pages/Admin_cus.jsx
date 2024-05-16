import React from 'react'
import A_Sidebar from '../Components/Sidebar/A_Sidebar';
import Customer from '../Components/Customer';



export default function Admin_cus() {

  return (
<div className='bodd'>
    <div className='  container-fluid'>
      <div className='row'>
        <div className='col-2'>
          <A_Sidebar />
        </div>
        <div className='col-10 row'>

          <div className='sticky-top'>
            
           {/* <Navbar/>           */}
               
          </div>
          <div className='mt-5'>
            <Customer />
          </div>
{/* <Fotter/> */}
        </div>
      </div>
    </div>

    </div>
   
  )
}
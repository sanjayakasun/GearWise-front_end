import React from 'react'
import A_Sidebar from '../Components/Sidebar/A_Sidebar';
import A_Dashboard from '../Components/A_Dashboard';



export default function Admin_dash() {

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
            <A_Dashboard/>
          </div>
{/* <Fotter/> */}
        </div>
      </div>
    </div>

    </div>
  )
}
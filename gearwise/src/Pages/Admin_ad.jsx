import React from 'react'
import A_Sidebar from '../Components/Sidebar/A_Sidebar';
import A_Advertisment from '../Components/A_Advertisment';



export default function Admin_ad() {

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
            <A_Advertisment />
          </div>
{/* <Fotter/> */}
        </div>
      </div>
    </div>

    </div>
   
  )
}
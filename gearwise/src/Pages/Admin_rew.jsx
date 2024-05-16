import React from 'react'
import A_Sidebar from '../Components/Sidebar/A_Sidebar';
import Review_Ratings from '../Components/Review_Ratings';



export default function Admin_rew() {

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
            <Review_Ratings />
          </div>
{/* <Fotter/> */}
        </div>
      </div>
    </div>

    </div>
   
  )
}
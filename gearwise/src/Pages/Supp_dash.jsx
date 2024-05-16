import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import Dashboard from '../Components/Dashboard'

export default function Supp_dash() {

  return (
<div className='bodd'>
    <div className='  container-fluid'>
      <div className='row'>
        <div className='col-2'>
          <Sidebar />
        </div>
        <div className='col-10 row'>

          <div className='sticky-top'>
            
               
          </div>
          <div className='mt-5'>
            <Dashboard/>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}
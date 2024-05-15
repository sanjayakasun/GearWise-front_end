import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import Upload_ad from '../Components/Upload_ad'
export default function Supp_ad() {

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
            <Upload_ad/>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}
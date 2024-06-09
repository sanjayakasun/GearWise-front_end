import React from 'react'
import MProduct from '../Components/MProduct';
import M_Sidebar from '../Components/Sidebar/M_Sidebar'


export default function Mod_Product() {

  return (
<div className='bodd'>
    <div className='  container-fluid'>
      <div className='row'>
        <div className='col-2'>
          <M_Sidebar />
        </div>
        <div className='col-10 row'>

          <div className='sticky-top'>
            
               
          </div>
          <div className='mt-5'>
            <MProduct/>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}
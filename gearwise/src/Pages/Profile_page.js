import React from 'react'
import Topbar from '../Components/Topbar/Topbar'
import Navbar from '../Components/Navbar/Navbar'
import Pageheader from '../Components/Pageheader/Pageheader'
import Fotter from '../Components/Fotter/Fotter'
import Profile from '../Components/Profile/Profile'
import Profilesidebar from '../Components/Profilesidebar/Profilesidebar'
import '../Components/Profile/stylep.css'



export default function Profile_page() {

  return (
<div className='boddy'>
    <div className='  container-fluid'>
      <div className='row'>
        <div className='col-2'>
          <Profilesidebar />
        </div>
        <div className='col-10 row'>

          <div className='sticky-top'>
            
           {/* <Navbar/>           */}
               
          </div>
          <div className='mt-5'>
            <Profile />
          </div>
{/* <Fotter/> */}
        </div>
      </div>
    </div>

    </div>
    //     <div>

    //       <>

    //       {/*<!-- Component: Two columns even layout --> */}
    //       <section>
    //         <div className="container">
    //           <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 ">
    //             <div className="col-span-4 lg:col-span-4  ">

    // <Profilesidebar/>

    //             </div>
    //             <div className="col-span-4 row lg:col-span-6"> 
    //             {/* <div className='row bg-primary fixed-top' style={{width:500, zIndex:1000,height:1000 }}></div> */}
    //             <Profile/>
    //             </div>
    //           </div>
    //         </div>
    //       </section>
    //       {/*<!-- End Two columns even layout --> */}

    //     </>

    //     </div>
  )
}
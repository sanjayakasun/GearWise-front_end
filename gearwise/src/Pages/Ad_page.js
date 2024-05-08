import React from 'react'
import Topbar from '../Components/Topbar/Topbar'
import Navbar from '../Components/Navbar/Navbar'
import Pageheader from '../Components/Pageheader/Pageheader'
import Fotter from '../Components/Fotter/Fotter'
import Ad_from_db from '../Components/Advertistments/Ad_from_db'

export default function Ad_page() {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <Pageheader/>
      <Ad_from_db/>
      <Fotter/>
    </div>
  )
}

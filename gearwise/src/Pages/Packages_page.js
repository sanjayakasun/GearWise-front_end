import React from 'react'
import Topbar from '../Components/Topbar/Topbar'
import Navbar from '../Components/Navbar/Navbar'
import Pageheader from '../Components/Pageheader/Pageheader'
import Packages from '../Components/Packages/Packages'
import Fotter from '../Components/Fotter/Fotter'

export default function Packages_page() {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <Pageheader/>
      <Packages/>
      <Fotter/>
    </div>
  )
}

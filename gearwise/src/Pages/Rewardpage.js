import React from 'react'
import Topbar from '../Components/Topbar/Topbar'
import Navbar from '../Components/Navbar/Navbar'
import Pageheader from '../Components/Pageheader/Pageheader'
import Rewarding from '../Components/Rewarding/Rewarding'
import Fotter from '../Components/Fotter/Fotter'
import Rewardearn from '../Components/Rewarding/Rewardearn'

export default function Rewardpage() {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <Pageheader/>
      <Rewarding/>
      <Rewardearn/>
      <Fotter/>
    </div>
  )
}

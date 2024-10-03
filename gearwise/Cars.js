import React from 'react'
import Topbar from '../Components/Topbar/Topbar'
import Navbar from '../Components/Navbar/Navbar'
import Pageheader from '../Components/Pageheader/Pageheader'
import Car from '../Components/Car/Car'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Carss from '../Carss'
import { useState ,Suspense } from 'react'

export default function Cars() {
    const [count,setCount] = useState(0)

  return (
    <div>
      <Topbar/>
      <Navbar/>
      <Pageheader/> 
      <Car/>
      <canvas>
        <Suspense fallback={null} >
        <Carss/>
        </Suspense>
      </canvas>
      
    </div>
  )
}

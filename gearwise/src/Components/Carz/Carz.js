// src/CarIcon.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const CarModel = () => {
  const { scene } = useGLTF('/car.gltf'); // true to enable caching and handle error
  return <primitive object={scene} scale={0.5} />;
};

const CarIcon = () => {
  return (
    <Canvas style={{ height: 300, width: 300 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <CarModel />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default CarIcon;

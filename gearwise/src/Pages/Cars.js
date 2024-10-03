import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const CarModel = () => {
  const carRef = useRef();
  const gltf = useLoader(GLTFLoader, "/car.glb");

  useFrame(() => {
    if (carRef.current) {
      carRef.current.rotation.y += 0.01; // Rotates the car
    }
  });

  return <primitive ref={carRef} object={gltf.scene} scale={0.5} />;
};

const CarIcon = () => {
  return (
    <Canvas style={{ height: 300, width: 300 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <CarModel />
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
};

const CarGallery = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
      {[...Array(5)].map((_, index) => (
        <CarIcon key={index} />
      ))}
    </div>
  );
};

export default CarGallery;

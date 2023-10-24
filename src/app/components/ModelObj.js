import React, { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import styles from '../page.module.css'
import { Suspense } from "react"
import { Canvas, useLoader } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { suspend } from 'suspend-react';
const city = import('@pmndrs/assets/hdri/city.exr').then((module) => module.default);

export default function ModelObj() {
  const Model = () => {
    // location of the 3D model
    const gltf = useLoader(GLTFLoader, "/drone/scene.gltf");
    const rotation = [-0.1, rotationAngle  , 0];
    return (
      <>
        {/* Use scale to control the size of the 3D model */}
        <primitive object={gltf.scene} scale={1.08} rotation={rotation}  position={[0, -0.6, postionAngle]} />
      </>
    );
  };

  
  const [rotationAngle, setRotationAngle] = useState(2.5);
  const [postionAngle, setPositionAngle] = useState(0);

  // Function to handle scroll events
  const handleScroll = () => {
    const scrollY = window.scrollY;
    // Define the rotation angle based on the scroll position
    const newRotationAngle = rotationAngle +  (scrollY / 200); // Adjust the factor as needed
    const newPositionAngle = (scrollY / 500); // Adjust the factor as needed
    setRotationAngle(newRotationAngle);
    setPositionAngle(-newPositionAngle)
    // console.log(newRotationAngle);
  };

  useEffect(() => {
    // Add a scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);
    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Element name="ModelObj">
    <div className={`${styles.model} ${styles.modelA}`}>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50}}>
        <ambientLight intensity={0.7} />
        <spotLight intensity={0.5} angle={0.7} penumbra={1} position={[10, 15, 10]} castShadow />
        <Suspense fallback={null}>
          <Model />
          <Environment  files={suspend(city)} />
        </Suspense>
        <OrbitControls 
          enableZoom={false}   // Disable zooming
          enablePan={false}   // Disable panning
          enableRotate={false}
        
          />
      </Canvas>

    </div>
    </Element>
  )
}

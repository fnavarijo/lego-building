import React from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function LegoModel () {
  const gltf = useLoader(GLTFLoader, '/Lego.glb');
  return (
    <>
      <primitive object={gltf.scene} scale={0.5} />
    </>
  )
}

export default LegoModel;

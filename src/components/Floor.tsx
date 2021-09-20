import * as THREE from 'three';
import React, { useRef } from 'react';

function Floor (props: JSX.IntrinsicElements['mesh']) {
  const mesh = useRef()

  return (
    <mesh
      {...props}
      ref={mesh}
    >
      <planeGeometry args={[5, 5]} />
      <meshBasicMaterial color={'#3f88c5'} side={THREE.DoubleSide} />
    </mesh>
  )
}

export default Floor;

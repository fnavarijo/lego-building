
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function LegoModel(props: { position: Number[], scale: Number }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/LegoBase.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        position={[0, 0.46, 4]}
      />
    </group>
  )
}

useGLTF.preload('/LegoBase.glb')

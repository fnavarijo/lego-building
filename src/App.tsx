import React, { useRef } from 'react'
import { Canvas } from '@react-three/fiber';

import './App.css'

function App(props: any) {
  const scene = useRef();

  return (
    <div id="canvas-container">
      <Canvas camera={{ position: [0, -10, 6] }}>
        { props.children }
      </Canvas>
    </div>
  )
}

export default App

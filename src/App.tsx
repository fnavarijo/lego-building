import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber';

import './App.css'
import ErrorBoundary from './components/ErrorBoundary';

function App(props: any) {
  const scene = useRef();

  return (
    <div id="canvas-container">
      <ErrorBoundary>
        <Canvas camera={{ position: [0, 5, 3] }}>
          <Suspense fallback={null}>
              { props.children }
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </div>
  )
}

export default App

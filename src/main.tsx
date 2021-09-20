import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
// import Box from './components/Box';
import Floor from './components/Floor';

import './index.css'

ReactDOM.render(
  <App>
    <ambientLight />
    <pointLight position={[10,10,10]} />
    {/* <Box position={[-1.2,0,0]} />
    <Box position={[1.2,0,0]} /> */}
    <Floor />
  </App>,
  document.getElementById('root')
)

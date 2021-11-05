import React from 'react';

import LegoModel from './LegoModel';

function getLegoBoardPosition () {
  const blockPosition = [];
  for (let i = -2; i <= 2; i++) {
    for (let j = -4; j <= 0; j++) {
      blockPosition.push(<LegoModel key={i+''+j} scale={0.5} position={[i, 0, j]} />)
    }
  }
  return blockPosition;
}

function LegoBoard () {
  return (
    <>
      { getLegoBoardPosition() }
    </>
  )
}

export default LegoBoard;
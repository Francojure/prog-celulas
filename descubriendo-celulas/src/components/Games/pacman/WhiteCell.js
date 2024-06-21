import React from 'react';

const WhiteCell = ({ position }) => {
  return (
    <mesh position={[position.x, position.y, 0]}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
};

export default WhiteCell;


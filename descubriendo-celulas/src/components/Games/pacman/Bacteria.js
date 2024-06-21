import React from 'react';

const Bacteria = ({ position }) => {
  return (
    <mesh position={[position.x, position.y, 0]}>
      <boxGeometry args={[1, 0.5, 0.5]} />
      <meshStandardMaterial color="green" />
    </mesh>
  );
};

export default Bacteria;

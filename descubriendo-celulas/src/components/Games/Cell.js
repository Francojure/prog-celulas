import React from 'react';
import * as THREE from 'three';

const Cell = ({ position }) => {
    const cellRef = React.useRef();
    React.useEffect(() => {
        const geometry = new THREE.SphereGeometry(0.5, 32, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cell = new THREE.Mesh(geometry, material);
        cell.position.set(position.x, position.y, position.z);
        cellRef.current = cell;
    }, [position]);

    return null;
};

export default Cell;

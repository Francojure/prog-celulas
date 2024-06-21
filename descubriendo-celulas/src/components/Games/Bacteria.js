import React from 'react';
import * as THREE from 'three';

const Bacteria = ({ position }) => {
    const bacteriaRef = React.useRef();
    React.useEffect(() => {
        const geometry = new THREE.SphereGeometry(0.3, 32, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const bacteria = new THREE.Mesh(geometry, material);
        bacteria.position.set(position.x, position.y, position.z);
        bacteriaRef.current = bacteria;
    }, [position]);

    return null;
};

export default Bacteria;

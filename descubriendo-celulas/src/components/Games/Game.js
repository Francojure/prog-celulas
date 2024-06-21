import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const Game = () => {
    const containerRef = useRef();
    const [cellPosition, setCellPosition] = useState({ x: 0, y: 0, z: 0 });
    const [bacteriaPositions] = useState([
        { x: 2, y: 2, z: 0 },
        { x: -2, y: -2, z: 0 }
    ]);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        containerRef.current.appendChild(renderer.domElement);

        // Crear la célula del jugador
        const cell = new THREE.Mesh(new THREE.SphereGeometry(0.5, 32, 32), new THREE.MeshBasicMaterial({ color: 0x00ff00 }));
        scene.add(cell);

        // Crear bacterias
        const bacterias = bacteriaPositions.map(pos => {
            const bacteria = new THREE.Mesh(new THREE.SphereGeometry(0.3, 32, 32), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
            bacteria.position.set(pos.x, pos.y, pos.z);
            scene.add(bacteria);
            return bacteria;
        });

        // Configurar el skybox
        const loader = new THREE.CubeTextureLoader();
        const texture = loader.load([
            'path/to/right.png',
            'path/to/left.png',
            'path/to/top.png',
            'path/to/bottom.png',
            'path/to/front.png',
            'path/to/back.png'
        ]);
        scene.background = texture;

        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        animate();

        const onKeyDown = (event) => {
            switch (event.key) {
                case 'ArrowUp':
                    cell.position.y += 0.1;
                    break;
                case 'ArrowDown':
                    cell.position.y -= 0.1;
                    break;
                case 'ArrowLeft':
                    cell.position.x -= 0.1;
                    break;
                case 'ArrowRight':
                    cell.position.x += 0.1;
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', onKeyDown);

        return () => {
            window.removeEventListener('keydown', onKeyDown);
            renderer.dispose();
        };
    }, [bacteriaPositions]);

    return <div ref={containerRef} />;
};

export default Game;

// ProcariotaViewer.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import './CellViewer.css';
import { useNavigate } from 'react-router-dom';

const ProcariotaViewer = () => {
  const containerRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(10, 10, 10);
    scene.add(light);

    camera.position.z = 20;

    const loader = new GLTFLoader();
    loader.load(
      'path/to/procariota.glb', 
      (gltf) => {
        const model = gltf.scene;
        model.position.set(0, 0, 0); 
        model.scale.set(2, 2, 2); 
        scene.add(model);
      },
      undefined,
      (error) => {
        console.error('Error loading model:', error);
      }
    );

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update(); 
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      controls.dispose();
      if (container && container.removeChild) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="cell-viewer">
      <button className="back-button" onClick={() => navigate('/cell-explorer')}>Volver</button>
      <div ref={containerRef} className="three-scene"></div>
    </div>
  );
};

export default ProcariotaViewer;


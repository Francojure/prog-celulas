import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './GameBoard.css'; // Importa el archivo CSS

// Bacteria component (como un cubo alargado por ahora)
function Bacteria({ position }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[1, 0.5, 0.5]} />
      <meshStandardMaterial color="green" />
    </mesh>
  );
}

// WhiteCell component (como una esfera por ahora)
function WhiteCell({ position }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
}

// GameBoard component
const GameBoard = () => {
  const [bacteriaPosition, setBacteriaPosition] = useState([0, 0, 0]);
  const [whiteCells, setWhiteCells] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // Mover bacteria con las flechas del teclado
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (gameOver) return;

      setBacteriaPosition((prevPosition) => {
        const [x, y, z] = prevPosition;
        switch (event.key) {
          case 'ArrowUp':
            return [x, y + 1, z];
          case 'ArrowDown':
            return [x, y - 1, z];
          case 'ArrowLeft':
            return [x - 1, y, z];
          case 'ArrowRight':
            return [x + 1, y, z];
          default:
            return prevPosition;
        }
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [gameOver]);

  // Crear células blancas periódicamente
  useEffect(() => {
    const interval = setInterval(() => {
      if (gameOver) return;

      setWhiteCells((prevCells) => [
        ...prevCells,
        { position: [Math.random() * 20 - 10, Math.random() * 20 - 10, 0] },
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, [gameOver]);

  // Verificar colisiones
  useEffect(() => {
    whiteCells.forEach((cell) => {
      const distance = Math.sqrt(
        (bacteriaPosition[0] - cell.position[0]) ** 2 +
        (bacteriaPosition[1] - cell.position[1]) ** 2
      );

      if (distance < 0.8) {
        setGameOver(true);
      }
    });
  }, [bacteriaPosition, whiteCells]);

  // Incrementar puntaje
  useEffect(() => {
    if (!gameOver) {
      const interval = setInterval(() => {
        setScore((prevScore) => prevScore + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [gameOver]);

  return (
    <div className="canvas-container">
      <h1 className="score">Score: {score}</h1>
      {gameOver && <h1 className="game-over">Game Over</h1>}
      <Canvas className="game-canvas" dpr={[1, 2]} gl={{ antialias: true }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Bacteria position={bacteriaPosition} />
        {whiteCells.map((cell, index) => (
          <WhiteCell key={index} position={cell.position} />
        ))}
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default GameBoard;







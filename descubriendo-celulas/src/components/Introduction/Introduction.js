import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Introduction.css';
import ThreeScene from './Three';

const Introduction = () => {
  const navigate = useNavigate();

  return (
    <div className="introduction">
      <h1>Bienvenidos a la Exploración de Células</h1>
      <p>Aprende sobre las células eucariotas y procariotas de manera interactiva.</p>
      <div className="three-scene-container">
        <ThreeScene />
      </div>
      <div className="buttons-container">
        <div className="buttons">
          <button onClick={() => navigate('/cell-explorer')}>Explorar Células</button>
          <button onClick={() => navigate('/organelle-info')}>Información de Organelos</button>
          <button onClick={() => navigate('/side-by-side-comparison')}>Comparar Células</button>
          <button onClick={() => navigate('/educational-activities')}>Actividades Educativas</button>
          <button onClick={() => navigate('/games')}>Juegos</button> {/* Nuevo botón para ir a la sección de juegos */}
        </div>
      </div>
    </div>
  );
};

export default Introduction;








import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EducationalActivities.css';

const EducationalActivities = () => {
  const navigate = useNavigate();

  return (
    <div className="educational-activities">
      <button onClick={() => navigate('/introduction')}>Volver a Introducción</button>
      <h1>Actividades Educativas</h1>
      <p>Participa en juegos interactivos para relacionar organelos con sus funciones y comprender cómo trabajan juntos para mantener la vida celular.</p>
      <button onClick={() => navigate('/unir-con-flechas')}>Unir con Flechas</button>
      <button onClick={() => navigate('/crucigrama')}>Crucigrama</button>
      <button onClick={() => navigate('/juego-de-tarjetas')}>Juego de Tarjetas</button>
    </div>
  );
};

export default EducationalActivities;




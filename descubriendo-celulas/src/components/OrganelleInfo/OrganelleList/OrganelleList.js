import React from 'react';
import './OrganelleList.css';

const organelles = [
  { name: 'Núcleo', description: 'El núcleo controla la actividad de la célula.' },
  { name: 'Mitocondria', description: 'La mitocondria produce energía para la célula.' },
  // Añade más organelos según sea necesario
];

const OrganelleList = ({ onSelect }) => {
  return (
    <div className="organelle-list">
      {organelles.map((organelle, index) => (
        <button key={index} onClick={() => onSelect(organelle)}>
          {organelle.name}
        </button>
      ))}
    </div>
  );
};

export default OrganelleList;

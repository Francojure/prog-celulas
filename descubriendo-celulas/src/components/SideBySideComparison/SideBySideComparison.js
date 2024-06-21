import React from 'react';
import './SideBySideComparison.css';
import eukaryoticCell from '../../assets/images/eukaryotic_cell.jpg';
import prokaryoticCell from '../../assets/images/prokaryotic_cell.jpg';

const SideBySideComparison = ({ onNavigate }) => {
  return (
    <div className="side-by-side-comparison">
      <h2>Comparación lado a lado</h2>
      <div className="cell-images">
        <div className="cell">
          <h3>Célula Eucariota</h3>
          <img src={eukaryoticCell} alt="Célula Eucariota" />
        </div>
        <div className="cell">
          <h3>Célula Procariota</h3>
          <img src={prokaryoticCell} alt="Célula Procariota" />
        </div>
      </div>
      <button onClick={() => onNavigate('Introduction')}>Volver a la Introducción</button>
    </div>
  );
};

export default SideBySideComparison;



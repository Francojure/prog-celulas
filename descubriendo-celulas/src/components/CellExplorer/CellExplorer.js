import React from 'react';
import './CellExplorer.css';
import { useNavigate } from 'react-router-dom';
import ImageCarousel from '../ImageCarousel/ImageCarousel';

const CellExplorer = () => {
  const navigate = useNavigate();

  return (
    <div className="cell-explorer">
      <h1>Explorador de Células</h1>
      <div className="carousel-container">
        <ImageCarousel />
      </div>
      <div className="cell-container-wrapper">
        <div className="cell-container">
          <h2>Célula Procariota</h2>
          <p>Células sin núcleo definido, típicas de bacterias y arqueas.</p>
          <button onClick={() => navigate('/procariota-viewer')}>Ver en 3D</button>
        </div>
        <div className="cell-container">
          <h2>Célula Eucariota Animal</h2>
          <p>Células con núcleo definido, típicas de organismos animales.</p>
          <button onClick={() => navigate('/eucariota-animal-viewer')}>Ver en 3D</button>
        </div>
        <div className="cell-container">
          <h2>Célula Eucariota Vegetal</h2>
          <p>Células con núcleo definido, típicas de organismos vegetales.</p>
          <button onClick={() => navigate('/eucariota-vegetal-viewer')}>Ver en 3D</button>
        </div>
      </div>
    </div>
  );
};

export default CellExplorer;







import React, { useState } from 'react';
import './OrganelleInfo.css';
import OrganelleList from './OrganelleList/OrganelleList';
import OrganelleDetail from './OrganelleDetail/OrganelleDetail';

const OrganelleInfo = ({ onNavigate }) => {
  const [selectedOrganelle, setSelectedOrganelle] = useState(null);

  const handleOrganelleSelect = (organelle) => {
    setSelectedOrganelle(organelle);
  };

  return (
    <div className="organelle-info">
      <button onClick={() => onNavigate('Introduction')}>Volver a Introducción</button>
      <OrganelleList onSelect={handleOrganelleSelect} />
      {selectedOrganelle && <OrganelleDetail organelle={selectedOrganelle} />}
    </div>
  );
};

export default OrganelleInfo;

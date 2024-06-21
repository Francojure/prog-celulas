import React from 'react';
import './OrganelleDetail.css';

const OrganelleDetail = ({ organelle }) => {
  return (
    <div className="organelle-detail">
      <h2>{organelle.name}</h2>
      <p>{organelle.description}</p>
    </div>
  );
};

export default OrganelleDetail;
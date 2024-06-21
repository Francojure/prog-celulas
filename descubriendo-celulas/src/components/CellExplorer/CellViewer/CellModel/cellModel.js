// CellModel.js
import React from 'react';
import CellViewer from '../CellViewer/CellViewer';

export const ProkaryoticCellViewer = () => (
  <CellViewer modelPath="/models/prokaryotic_cell.glb" />
);

export const AnimalEukaryoticCellViewer = () => (
  <CellViewer modelPath="/models/animal_eukaryotic_cell.glb" />
);

export const PlantEukaryoticCellViewer = () => (
  <CellViewer modelPath="/models/plant_eukaryotic_cell.glb" />
);

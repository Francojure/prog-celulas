import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Introduction from './components/Introduction/Introduction';
import CellExplorer from './components/CellExplorer/CellExplorer';
import OrganelleInfo from './components/OrganelleInfo/OrganelleInfo';
import SideBySideComparison from './components/SideBySideComparison/SideBySideComparison';
import EducationalActivities from './components/EducationalActivities/EducationalActivities';
import ThreeScene from './components/Introduction/Three';
import Login from './components/Login/Login';
import Games from './components/Games/Games';
import Game from './components/Games/Game';
import PacManGame from './components/Games/pacman/GameBoard';
import UnirConFlechas from './components/EducationalActivities/UnirConFlechas';
import Crucigrama from './components/EducationalActivities/Crucigrama';
import JuegoDeTarjetas from './components/EducationalActivities/JuegoDeTarjetas';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/cell-explorer" element={<CellExplorer />} />
          <Route path="/organelle-info" element={<OrganelleInfo />} />
          <Route path="/side-by-side-comparison" element={<SideBySideComparison />} />
          <Route path="/educational-activities" element={<EducationalActivities />} />
          <Route path="/three-scene" element={<ThreeScene />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/game" element={<Game />} />
          <Route path="/games/pacman" element={<PacManGame />} />
          <Route path="/unir-con-flechas" element={<UnirConFlechas />} />
          <Route path="/crucigrama" element={<Crucigrama />} />
          <Route path="/juego-de-tarjetas" element={<JuegoDeTarjetas />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;








import React from 'react';
import { Link } from 'react-router-dom';

const Games = () => {
  return (
    <div>
      <h2>Juegos Educativos</h2>
      <ul>
        <li>
          <Link to="/games/game">Juego de Células</Link> {/* Enlace al juego de células */}
        </li>
        <li>
          <Link to="/Games/pacman">Pac-Man</Link> {/* Enlace al juego de Pac-Man */}
        </li>
        {/* Puedes agregar más enlaces a otros juegos en el futuro */}
      </ul>
    </div>
  );
};

export default Games;


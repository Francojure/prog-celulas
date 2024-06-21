import React, { useState } from 'react';
import './UnirConFlechas.css';

const UnirConFlechas = () => {
  const [answers, setAnswers] = useState({});

  const characteristics = [
    { id: 1, text: 'Presencia de núcleo bien definido con membrana nuclear' },
    { id: 2, text: 'Material genético disperso en el citoplasma sin membrana nuclear' },
    { id: 3, text: 'Organelos membranosos como mitocondrias y cloroplastos' },
    { id: 4, text: 'Ribosomas de 70S distribuidos en el citoplasma' },
    { id: 5, text: 'Pared celular compuesta principalmente de peptidoglicano' },
    { id: 6, text: 'División celular por mitosis y meiosis' },
    { id: 7, text: 'Flagelos compuestos por microtúbulos en un patrón de 9+2' },
    { id: 8, text: 'Reproducción asexual por fisión binaria' },
    { id: 9, text: 'Cromosomas lineales presentes en el núcleo' },
    { id: 10, text: 'Presencia de estructuras como el citoesqueleto' },
    // Añade más características detalladas aquí
  ];

  const correctAnswers = {
    1: 'eukaryote',
    2: 'prokaryote',
    3: 'eukaryote',
    4: 'prokaryote',
    5: 'prokaryote',
    6: 'eukaryote',
    7: 'eukaryote',
    8: 'prokaryote',
    9: 'eukaryote',
    10: 'eukaryote',
    // Añade más respuestas correctas aquí
  };

  const handleChange = (event, id) => {
    const { value } = event.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [id]: value,
    }));
  };

  const handleSubmit = () => {
    const isAllCorrect = Object.keys(correctAnswers).every(
      (key) => correctAnswers[key] === answers[key]
    );
    if (isAllCorrect) {
      alert('¡Felicidades! Has unido todas las características correctamente.');
    } else {
      alert('Algunas respuestas son incorrectas. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className="unir-con-flechas">
      <h1>Seleccione La Opcion Correcta</h1>
      <div className="columns">
        <div className="column">
          <h2>Características</h2>
          {characteristics.map((char) => (
            <div key={char.id} className="characteristic">
              {char.text}
              <select
                className="select-cell"
                value={answers[char.id] || ''}
                onChange={(event) => handleChange(event, char.id)}
              >
                <option value="">Selecciona una opción</option>
                <option value="eukaryote">Células Eucariotas</option>
                <option value="prokaryote">Células Procariotas</option>
              </select>
            </div>
          ))}
        </div>
      </div>
      <button onClick={handleSubmit}>Verificar</button>
    </div>
  );
};

export default UnirConFlechas;














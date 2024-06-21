// Crucigrama.jsx
// Crucigrama.jsx
import React, { useState } from 'react';
import './Crucigrama.css';

const initialGrid = [
  ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', 'C', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', 'E', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', 'L', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', 'U', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', 'L', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', 'A', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', 'S', '', '', '', '', '', '', '', '', ''],
  ['', '', '',  '', '', '', '', '', '', '', '', '', '', '', '', '',  ''],
];

const questions = [
  { question: "Organelo que contiene el material genético en las células eucariotas", answer: "NUCLEO", row: 3, col: 7, direction: "across" },
  { question: "Puede ser liso o tener ribosomas en el", answer: "RETICULO", row: 0, col: 5, direction: "down" },
  { question: "Organelo donde se lleva a cabo la fotosíntesis en plantas", answer: "CLOROPLASTO", row: 2, col: 1, direction: "down" },
  { question: "Organelo que puede almacenar diferentes fluidos", answer: "VACUOLA", row: 9, col: 0, direction: "across" },
  { question: "Pelos asociados con la transferencia genética en bacterias", answer: "PILI", row: 1, col: 6, direction: "down" },
  { question: "Parte de la célula que regula el paso de sustancias", answer: "MEMBRANA", row: 4, col: 4, direction: "across" },
  { question: "Organelo celular que lleva a cabo la digestión celular", answer: "LISOSOMA", row: 6, col: 8, direction: "across" },
];

const editableCells = [
  // C
  { row: 3, col: 5 }, { row: 3, col: 6 }, { row: 3, col: 9 }, { row: 3, col: 10 }, { row: 3, col: 11 },
  // E
  { row: 4, col: 6 }, { row: 4, col: 8 }, { row: 4, col: 9 }, { row: 4, col: 10 }, { row: 4, col: 11 }, { row: 4, col: 12 }, { row: 4, col: 13 }, { row: 4, col: 14 },
  // L
  { row: 5, col: 6 }, { row: 5, col: 8 }, { row: 5, col: 9 }, { row: 5, col: 10 }, { row: 5, col: 11 }, { row: 5, col: 12 }, { row: 5, col: 13 }, { row: 5, col: 14 }, { row: 5, col: 15 }, { row: 5, col: 16 },
  // U
  { row: 6, col: 4 }, { row: 6, col: 5 }, { row: 6, col: 6 }, { row: 6, col: 10 }, { row: 6, col: 11 }, { row: 6, col: 12 },
  // L
  { row: 7, col: 5 }, { row: 7, col: 6 }, { row: 7, col: 10 },
  // A
  { row: 8, col: 2 }, { row: 8, col: 3 }, { row: 8, col: 4 }, { row: 8, col: 5 }, { row: 8, col: 6 }, { row: 8, col: 9 }, { row: 8, col: 10 },
  // S
  { row: 9, col: 5 }, { row: 9, col: 6 }, { row: 9, col: 10 }, { row: 9, col: 11 }, { row: 9, col: 12 }, { row: 9, col: 13 }, { row: 9, col: 14 },
];

const Crucigrama = () => {
  const [grid, setGrid] = useState(initialGrid);

  const handleChange = (e, row, col) => {
    const value = e.target.value.toUpperCase();
    setGrid(prevGrid => {
      const newGrid = [...prevGrid];
      newGrid[row][col] = value;
      return newGrid;
    });
  };

  const isEditable = (row, col) => {
    return editableCells.some(cell => cell.row === row && cell.col === col);
  };

  return (
    <div className="crucigrama-container">
      <table>
        <tbody>
          {grid.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  className={
                    isEditable(rowIndex, colIndex) ? 'editable' : 'filled'
                  }
                >
                  <input
                    type="text"
                    maxLength="1"
                    value={cell}
                    onChange={(e) => handleChange(e, rowIndex, colIndex)}
                    readOnly={cell !== ''}
                    className="cell-input"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="questions">
        {questions.map((q, index) => (
          <p key={index}>
            {index + 1}: {q.question}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Crucigrama;






 
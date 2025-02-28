import React from 'react';

export const CharacterCard = ({ id, name, gender, birthYear, height, mass }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Género: {gender}</p>
        <p className="card-text">Año de nacimiento: {birthYear}</p>
        <p className="card-text">Altura: {height} cm</p>
        <p className="card-text">Peso: {mass} kg</p>
      </div>
    </div>
  );
};
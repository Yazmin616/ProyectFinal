import React from 'react';

function CharacterDetails({ character, onBack }) {
  return (
    <div className="container mx-auto">
      <button
        className="mb-4 p-2 bg-blue-500 text-white rounded"
        onClick={onBack}
      >
        Back to List
      </button>
      <div className="mt-4 p-4 bg-white rounded shadow">
        <h2 className="text-2xl font-bold">{character.name}</h2>
        {character.image && <img src={character.image} alt={character.name} className="mt-2 rounded max-h-64 w-auto" />}
        
        <div className="mt-4">
          <p className="mb-2"><strong>Gender:</strong> {character.gender}</p>
          <p className="mb-2"><strong>Species:</strong> {character.species}</p>
          <p className="mb-2"><strong>Homeworld:</strong> {character.homeworld}</p>
          <p className="mb-2"><strong>Birth Year:</strong> {character.birth_year}</p>
          <p className="mb-2"><strong>Height:</strong> {character.height}</p>
          <p className="mb-2"><strong>Eye Color:</strong> {character.eye_color}</p>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetails;

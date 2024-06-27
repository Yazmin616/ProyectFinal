import React from 'react';

function CharacterList({ characters, onSelectCharacter }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {characters.map((character, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded shadow cursor-pointer hover:bg-gray-100"
          onClick={() => onSelectCharacter(character)}
        >
          <h2 className="text-xl font-semibold">{character.name}</h2>
          {character.image && (
            <img
              src={character.image}
              alt={character.name}
              className="mt-2 rounded h-32 w-full object-cover"
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default CharacterList;

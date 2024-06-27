import React, { useEffect, useState } from 'react';
import CharacterList from '../components/CharacterList';
import CharacterDetails from '../components/CharacterDetails';

function StarWars() {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://akabab.github.io/starwars-api/api/all.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCharacters(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-4">Star Wars Personajes</h1>
      {error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        selectedCharacter ? (
          <CharacterDetails
            character={selectedCharacter}
            onBack={() => setSelectedCharacter(null)}
          />
        ) : (
          <CharacterList
            characters={characters}
            onSelectCharacter={setSelectedCharacter}
          />
        )
      )}
    </div>
  );
}

export default StarWars;

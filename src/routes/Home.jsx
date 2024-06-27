import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-5xl font-bold text-center mb-12">Bienvenido a la aplicación Multi-API</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Card for Star Wars */}
        <div className="bg-blue-500 text-white rounded-lg p-6 shadow-lg hover:shadow-2xl transition duration-300">
          <h2 className="text-2xl font-bold mb-4">Star Wars</h2>
          <img 
            src="https://starwars-visualguide.com/assets/img/placeholder.jpg" 
            alt="Star Wars" 
            className="rounded mb-4"
          />
          <p className="mb-4">Explora los personajes del universo de Star Wars. Descubre información detallada sobre tus personajes favoritos de Star Wars.</p>
          <Link to="/starwars" className="bg-white text-blue-500 font-semibold py-2 px-4 rounded shadow hover:bg-gray-200 transition duration-300">
            Explore Star Wars
          </Link>
        </div>
        
        {/* Card for Rick and Morty */}
        <div className="bg-green-500 text-white rounded-lg p-6 shadow-lg hover:shadow-2xl transition duration-300">
          <h2 className="text-2xl font-bold mb-4">Rick and Morty</h2>
          <img 
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" 
            alt="Rick and Morty" 
            className="rounded mb-4"
          />
          <p className="mb-4">Sumérgete en el peculiar mundo de Rick y Morty. Conoce más sobre los extraños y entretenidos personajes de la serie.</p>
          <Link to="/rickandmorty" className="bg-white text-green-500 font-semibold py-2 px-4 rounded shadow hover:bg-gray-200 transition duration-300">
            Explore Rick and Morty
          </Link>
        </div>
        
        {/* Card for Harry Potter */}
        <div className="bg-yellow-500 text-white rounded-lg p-6 shadow-lg hover:shadow-2xl transition duration-300">
          <h2 className="text-2xl font-bold mb-4">Harry Potter</h2>
          <img 
            src="/img/hp.jpg" 
            alt="Harry Potter" 
            className="rounded mb-4"
          />
          <p className="mb-4">Descubre el mundo mágico de Harry Potter. Aprende sobre los personajes icónicos de J.K. Rowling en la famosa serie.</p>
          <Link to="/harrypotter" className="bg-white text-yellow-500 font-semibold py-2 px-4 rounded shadow hover:bg-gray-200 transition duration-300">
            Explore Harry Potter
          </Link>
        </div>
      
      </div>
    </div>
  );
}

export default Home;

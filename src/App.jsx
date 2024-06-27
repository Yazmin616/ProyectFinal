import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './routes/Home';
import HarryPotter from './routes/HarryPotter';
import StarWars from './routes/StarWars';
import RickAndMorty from './routes/RickAndMorty';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-gray-800 p-4 shadow">
          <ul className="flex justify-center space-x-4">
            <li><NavLink className="text-white hover:text-gray-400" to="/">Home</NavLink></li>
            <li><NavLink className="text-white hover:text-gray-400" to="/starwars">Star Wars</NavLink></li>
            <li><NavLink className="text-white hover:text-gray-400" to="/rickandmorty">Rick and Morty</NavLink></li>
            <li><NavLink className="text-white hover:text-gray-400" to="/harrypotter">Harry Potter</NavLink></li>
          </ul>
        </nav>
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/harrypotter" element={<HarryPotter />} />
            <Route path="/starwars" element={<StarWars />} />
            <Route path="/rickandmorty" element={<RickAndMorty />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import SearchBar from './components/SearchBar';
import Pokedex from './components/Pokedex';
import { getPokemons } from './Api';

const { useState, useEffect } = React;

function App() {
  const [pokemons, setPokemons] = useState([])

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();
      setPokemons(data.results);
    } catch(err){}
  }

  useEffect(() => {
    fetchPokemons();
  }, []);


  return (
    <div>
      <Navbar />
    <div className="App">
     <SearchBar />
     <Pokedex pokemons={pokemons}/>
    </div>
    </div>
  );
}

export default App;

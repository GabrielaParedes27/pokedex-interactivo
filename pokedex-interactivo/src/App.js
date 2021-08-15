import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import SearchBar from './components/SearchBar';
import Pokedex from './components/Pokedex';
import { getPokemonData, getPokemons } from './Api';

const { useState, useEffect } = React;

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState();
  const [total, setTotal] = useState();
  const [loading, setLoading] = useState(true);

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
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
     { loading ?
     <div>cargando pokemones... </div>:
     <Pokedex pokemons={pokemons}/>
    }
    </div>
    </div>
  );
}

export default App;

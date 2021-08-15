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
      setLoading(true);
      const data = await getPokemons(9, 9 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 9));
    } catch(err){}
  }

  useEffect(() => {
    fetchPokemons();
  }, [page]);




  return (
    <div>
      <Navbar />
    <div className="App">
     <SearchBar />
     <Pokedex 
     loading={loading}
     pokemons={pokemons}
     page={page}
     setPage={setPage}
     total={total}
     />
    
    </div>
    </div>
  );
}

export default App;

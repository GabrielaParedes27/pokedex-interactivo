import React from 'react';

const Pokedex = (props) => {

    const {pokemons} = props;
    return (
        <div>
            <div className="header">
                <h1>Pokedex</h1>
                <div>Pagination</div>
            </div>
            <div className="pokedex-grid">
                {pokemons.map((pokemon, idx) => {
                    return (
                        <div key={pokemon.name}>#{idx+1}: {pokemon.name}</div>
                    )
                })}
            </div>
        </div>
    );
};

export default Pokedex;
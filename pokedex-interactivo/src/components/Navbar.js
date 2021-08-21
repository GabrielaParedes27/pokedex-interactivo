import React from 'react';
import FavoriteContext from '../contexts/favoritesContext';

const { useContext } = React;


const Navbar = () => {
    const { favoritePokemons } = useContext(FavoriteContext);
    let imgUrl = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png';

    return <nav>
        <div />
        <div>
        <img src={imgUrl} alt="pokeApi-logo" className="navbar-img" />    
        </div>
        <div>❤️ {favoritePokemons.length}</div>
        </nav>;
};

export default Navbar;
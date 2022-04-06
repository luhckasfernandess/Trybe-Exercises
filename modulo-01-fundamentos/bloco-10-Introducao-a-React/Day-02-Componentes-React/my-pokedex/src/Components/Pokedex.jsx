import React, { Component } from "react";
import pokemons from '../data';
import Pokemon from '../Components/Pokemon';

// Ao invés de uma classe eu poderia criar uma function, mas foi-me sugerido me acostumar a usar classes
class Pokedex extends Component {
    render () {
        return (
            <div className="pokedex">
                {pokemons.map((elem) => <Pokemon pokemon={elem} key={elem.id}/>)}
            </div>
        );
    }
}

export default Pokedex
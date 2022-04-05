import React, { Component } from 'react';
import './App.css';
import pokemons from './data';
import Pokemon from './Components/Pokemon'

class App extends Component {
  render() {
    return (
      <div>
        {pokemons.map((elem) => (
          <Pokemon pokemon={elem} key={elem.id}/>
        ))}
      </div>
    );
  }
}

export default App;

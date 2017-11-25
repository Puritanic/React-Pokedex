import React, { Component } from 'react';
import './App.css';
import PokemonList from './components/PokemonList';  

class App extends Component {
  render(){
    return <div className="pokeapp">
      <h1> The Kanto PokéDex! </h1>
      <PokemonList />
    </div>;
  }
}

export default App;

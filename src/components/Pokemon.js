import React, { Component } from 'react'

export class Pokemon extends Component {
  render() {
    const {pokemon} = this.props;    
    return (
      <div className="pokemon--species">
        <div className="pokemon--species--container">
            <div className="pokemon--species--sprite">
              <img src={`https://img.pokemondb.net/sprites/ruby-sapphire/normal/${pokemon.name}.png`} alt={pokemon.name} />            
            </div>
            <div className="pokemon--species--name"> {pokemon.name} </div>
        </div>
      </div>
    )
  }
}

export default Pokemon;

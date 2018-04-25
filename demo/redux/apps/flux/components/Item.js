import React from 'react'

import PokemonActions from '../actions/PokemonActions'

const Item = ({
  pokemon
}) => (
  <div className="card text-xs-center"
       onClick={ () => PokemonActions.focus(pokemon) }>
    <div className="card-header">{ pokemon.name }</div>

    <img className="card-img-top" src={ pokemon.image } alt={ pokemon.name } />

    <div className="card-footer text-muted">#{ pokemon.id }</div>
  </div>
)

export default Item

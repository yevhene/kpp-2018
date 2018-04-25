import React from 'react'

const Item = ({
  pokemon, onClick
}) => (
  <div className="card text-xs-center" onClick={ () => onClick(pokemon) }>
    <div className="card-header">{ pokemon.name }</div>

    <img className="card-img-top" src={ pokemon.image } alt={ pokemon.name } />

    <div className="card-footer text-muted">#{ pokemon.id }</div>
  </div>
)

export default Item

import React from 'react'

import Item from './Item'

const List = ({
  pokemons, onItemClick
}) => (
  <section className="row">
    { pokemons.map(pokemon => (
      <div key={ pokemon.id } className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <Item key={ pokemon.id } pokemon={ pokemon } onClick={ onItemClick } />
      </div>
    )) }
  </section>
)

export default List

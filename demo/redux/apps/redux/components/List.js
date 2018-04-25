import React from 'react'

import Item from './Item'

const List = ({
  items
}) => (
  <section className="row">
    { items.map(item => (
      <div key={ item.id } className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <Item item={ item } />
      </div>
    )) }
  </section>
)

export default List

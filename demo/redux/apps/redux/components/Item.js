import React from 'react'
import { connect } from 'react-redux'

import { focus } from '../actions/focus'

const Item = ({
  item, onClick
}) => (
  <div className="card text-xs-center" onClick={ () => onClick(item) }>
    <div className="card-header">{ item.name }</div>

    <img className="card-img-top" src={ item.image } alt={ item.name } />

    <div className="card-footer text-muted">#{ item.id }</div>
  </div>
)

const mapDispatchToProps = dispatch => ({
  onClick(pokemon) {
    dispatch(focus(pokemon))
  }
})

export default connect(null, mapDispatchToProps)(Item)

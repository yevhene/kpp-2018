import React from 'react'
import { connect } from 'react-redux'

import { search } from '../actions/search'

const Search = ({
  q, onChange
}) => (
  <div className="input-group search">
    <input type="text"
           className="form-control"
           placeholder="Enter Pokemon Name"
           value={ q }
           onChange={ e => onChange(e.target.value) } />
    <div className="input-group-addon">🔍</div>
  </div>
)

const mapStateToProps = state => ({
  q: state.search
})

const mapDispatchToProps = dispatch => ({
  onChange(q) {
    dispatch(search(q))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)

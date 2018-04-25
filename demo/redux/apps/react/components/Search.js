import React from 'react'

const Search = ({
  onChange
}) => (
  <div className="input-group search">
    <input type="text"
           className="form-control"
           placeholder="Enter Pokemon Name"
           onChange={ e => onChange(e.target.value) } />
    <div className="input-group-addon">🔍</div>
  </div>
)

export default Search

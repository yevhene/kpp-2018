import React from 'react'
import { connect } from 'react-redux'

import search from '../lib/search'

import Map from '../components/Map'
import Search from '../components/Search'
import List from '../components/List'

const App = ({
  pokemons
}) => (
  <div>
    <nav className="navbar navbar-light bg-faded">
      <a className="navbar-brand">Pokemon</a>
    </nav>

    <div className="container">
      <Map items={ pokemons } />

      <Search />

      <List items={ pokemons } />
    </div>
  </div>
)

const mapStateToProps = ({ pokemons, search: q }) => ({
  pokemons: search(pokemons, q)
})

export default connect(mapStateToProps)(App)

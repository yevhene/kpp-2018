import React from 'react'

import PokemonStore from '../stores/PokemonStore'

import Map from './Map'
import Search from './Search'
import List from './List'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pokemons: this.getPokemons()
    }
  }

  componentDidMount() {
    PokemonStore.addChangeListener(this.onChange());
  }

  componentWillUnmount() {
    PokemonStore.removeChangeListener(this.onChange());
  }

  onChange() {
    return () => this.setState({ pokemons: this.getPokemons() })
  }

  getPokemons() {
    return PokemonStore.list()
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-faded">
          <a className="navbar-brand">Pokemon</a>
        </nav>

        <div className="container">
          <Map pokemons={ this.state.pokemons } />

          <Search />

          <List pokemons={ this.state.pokemons } />
        </div>
      </div>
    )
  }
}

export default App

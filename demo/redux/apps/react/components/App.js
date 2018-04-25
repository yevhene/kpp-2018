import React from 'react'

import Map from './Map'
import Search from './Search'
import List from './List'

import search from '../lib/search'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemons: this.props.pokemons,
      focusedPokemon: null
    }
  }

  search(q) {
    this.setState({ pokemons: search(this.props.pokemons, q) })
  }

  focus(pokemon) {
    this.setState({ focusedPokemon: pokemon })
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-faded">
          <a className="navbar-brand">Pokemon</a>
        </nav>

        <div className="container">
          <Map pokemons={this.state.pokemons}
               focusedPokemon={this.state.focusedPokemon}
               onMarkerClick={(pokemon) => this.focus(pokemon)} />

          <Search onChange={(search) => this.search(search)} />

          <List pokemons={this.state.pokemons}
                onItemClick={(pokemon) => this.focus(pokemon)} />
        </div>
      </div>
    )
  }
}

export default App

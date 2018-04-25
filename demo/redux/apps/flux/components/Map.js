import React from 'react'
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps'

import PokemonStore from '../stores/PokemonStore'
import PokemonActions from '../actions/PokemonActions'

class Map extends React.Component {
  constructor() {
    super()

    this.state = { location: this.getLocation() }
  }

  componentDidMount() {
    PokemonStore.addChangeListener(this.onChange());
  }

  componentWillUnmount() {
    PokemonStore.removeChangeListener(this.onChange());
  }

  onChange() {
    return () => this.setState({ location: this.getLocation() })
  }

  getLocation() {
    const pokemon = PokemonStore.focused()

    if (pokemon) {
      return pokemon.location
    } else {
      return { lat: 49.2330407, lng: 28.4683191 }
    }
  }

  render() {
    return (
      <GoogleMapLoader
        containerElement={
          <div className="map" />
        }
        googleMapElement={
          <GoogleMap zoom={ 12 } center={ this.state.location }>
            { this.props.pokemons.map(pokemon => this.renderMarker(pokemon)) }
          </GoogleMap>
        }
      />
    )
  }

  renderMarker(pokemon) {
    return (
      <Marker
        key={ pokemon.id }
        position={ pokemon.location }
        title={ pokemon.name }
        icon={ pokemon.pin }
        onClick={ () => PokemonActions.focus(pokemon) } />
    )
  }
}

export default Map

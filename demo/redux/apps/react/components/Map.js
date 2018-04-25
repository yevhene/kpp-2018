import React from 'react'
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps'

class Map extends React.Component {
  render() {
    return (
      <GoogleMapLoader
        containerElement={
          <div className="map" />
        }
        googleMapElement={
          <GoogleMap zoom={ 12 } center={ this.getLocation() }>
            { this.props.pokemons.map(pokemon => this.renderMarker(pokemon)) }
          </GoogleMap>
        }
      />
    )
  }

  getLocation() {
    if (this.props.focusedPokemon) {
      return this.props.focusedPokemon.location
    } else {
      return { lat: 49.2330407, lng: 28.4683191 }
    }
  }

  renderMarker(pokemon) {
    return (
      <Marker
        key={ pokemon.id }
        position={ pokemon.location }
        title={ pokemon.name }
        icon={ pokemon.pin }
        onClick={ () => this.props.onMarkerClick(pokemon) } />
    )
  }
}

export default Map

import React from 'react'
import { connect } from 'react-redux'
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps'

import { focus } from '../actions/focus'

class Map extends React.Component {
  render() {
    return (
      <GoogleMapLoader
        containerElement={
          <div className="map" />
        }
        googleMapElement={
          <GoogleMap zoom={ 12 } center={ this.props.location }>
            { this.props.items.map(item => this.renderMarker(item)) }
          </GoogleMap>
        }
      />
    )
  }

  renderMarker(item) {
    return (
      <Marker
        key={ item.id }
        position={ item.location }
        title={ item.name }
        icon={ item.pin }
        onClick={ () => this.props.onMarkerClick(item) } />
    )
  }
}

const mapStateToProps = ({ focus: focusedPokemon }) => {
    let location = { lat: 49.2330407, lng: 28.4683191 };

    if (focusedPokemon) {
      location = focusedPokemon.location
    }

    return { location }
}

const mapDispatchToProps = dispatch => ({
  onMarkerClick(pokemon) {
    dispatch(focus(pokemon))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Map)

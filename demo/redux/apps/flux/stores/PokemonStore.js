import { EventEmitter } from 'events'

import AppDispatcher from '../dispatcher/AppDispatcher'
import pokemons from '../../../data/pokemons.json'
import search from '../lib/search'

import { FOCUS_POKEMON, SEARCH_POKEMONS } from '../actions/PokemonActions'

const CHANGE_EVENT = 'change'

let focusedPokemon = null
let filteredPokemons = pokemons

const PokemonStore = Object.assign({}, EventEmitter.prototype, {
  focused() {
    return focusedPokemon
  },

  list() {
    return filteredPokemons
  }
}, {
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
})

AppDispatcher.register(action => {
  switch(action.type) {
    case FOCUS_POKEMON:
      focusedPokemon = action.pokemon
      PokemonStore.emit(CHANGE_EVENT)
      break

    case SEARCH_POKEMONS:
      filteredPokemons = search(pokemons, action.q)
      PokemonStore.emit(CHANGE_EVENT)
      break

    default:
      // no op
  }
})

export default PokemonStore

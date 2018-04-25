import AppDispatcher from '../dispatcher/AppDispatcher'

export const FOCUS_POKEMON = 'FOCUS_POKEMON'
export const SEARCH_POKEMONS = 'SEARCH_POKEMONS'

const PokemonActions = {
  focus(pokemon) {
    AppDispatcher.dispatch({
      type: FOCUS_POKEMON,
      pokemon
    })
  },

  search(q) {
    AppDispatcher.dispatch({
      type: SEARCH_POKEMONS,
      q
    })
  }
}

export default PokemonActions

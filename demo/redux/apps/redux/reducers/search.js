import { SEARCH_POKEMONS } from '../actions/search'

export default function search(state = [], action) {
  switch (action.type) {
  case SEARCH_POKEMONS:
    return action.q
  default:
    return state
  }
}

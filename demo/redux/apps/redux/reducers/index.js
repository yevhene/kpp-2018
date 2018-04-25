import { combineReducers } from 'redux'

import pokemons from './pokemons'
import focus from './focus'
import search from './search'

const rootReducer = combineReducers({
  pokemons, focus, search
})

export default rootReducer

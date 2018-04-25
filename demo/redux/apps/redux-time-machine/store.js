import { createStore, compose } from 'redux'

import rootReducer from '../redux/reducers/index'

import pokemons from '../../data/pokemons.json'

import timeMachine from './time-machine'

const initialState = {
  pokemons,
  search: '',
  focus: null
}

const store = createStore(rootReducer, initialState, compose(
  timeMachine()
))

if (module.hot) {
  module.hot.accept('../redux/reducers/', () => {
    const nextRootReducer = require('../redux/reducers/index').default
    store.replaceReducer(nextRootReducer)
  })
}

export default store

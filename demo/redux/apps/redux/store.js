import { createStore, compose } from 'redux'

import rootReducer from './reducers/index'

import pokemons from '../../data/pokemons.json'

const initialState = {
  pokemons,
  search: '',
  focus: null
};

const store = createStore(rootReducer, initialState, compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default
    store.replaceReducer(nextRootReducer)
  })
}

export default store

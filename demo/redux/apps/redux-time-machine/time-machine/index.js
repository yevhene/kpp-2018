import { createStore, compose, applyMiddleware } from 'redux'

import TimeMachine from './TimeMachine'
import wrapReducer from './wrapReducer'
import { SET_FRAME } from './actions'

const middleware = store => next => action => {
  const result = next(action)

  if (action.type !== SET_FRAME) {
    TimeMachine.push(store.getState())
  }

  return result
}

const enhance = () => next => (reducer, initialState, enhancer) => {
  TimeMachine.push(initialState)

  const store = createStore(
    wrapReducer(reducer), initialState, applyMiddleware(middleware)
  )

  return store
}

export default enhance

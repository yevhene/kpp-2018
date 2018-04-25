import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import css from '../../styles/index.styl'

import App from '../redux/containers/App'
import Sliders from './time-machine/components/Sliders'

import store from './store'

render(
  <div>
    <Sliders store={ store } />
    <Provider store={ store }>
      <App />
    </Provider>
  </div>,
  document.getElementById('root')
)

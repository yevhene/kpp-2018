import React from 'react'
import { render } from 'react-dom'

import App from './components/App'

import pokemons from '../../data/pokemons.json'
import css from '../../styles/index.styl'

render(<App pokemons={ pokemons } />, document.getElementById('root'))

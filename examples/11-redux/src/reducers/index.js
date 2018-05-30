import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import students from './students';

export default combineReducers({
  students,
  routing: routerReducer
});

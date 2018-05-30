import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter as Router, routerMiddleware } from 'react-router-redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import promiseMiddleware from 'redux-promise';

const history = createHistory();
const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(
    promiseMiddleware,
    routerMiddleware(history)
  )
));

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();

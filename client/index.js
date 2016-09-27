////////////////////////////////////////////////////////////////////////////////
// IMPORTS /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// CORE ////////////////////////////////////////////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

// ROUTER //////////////////////////////////////////////////////////////////////

import { match, Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

// PAGES ///////////////////////////////////////////////////////////////////////

import routes from '../routes/client';

////////////////////////////////////////////////////////////////////////////////
// CORE ////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

////////////////////////////////////////////////////////////////////////////////
// CORE ////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

match({ history, routes }, (error, redirectLocation, renderProps) => {
  ReactDOM.render(
    <Provider store={store}>
      <Router {...renderProps} />
    </Provider>, document.getElementById('root'));
})

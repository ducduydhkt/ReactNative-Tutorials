import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import productReducer from './src/modules/ProductModule/reducers';

import AppNavigator from './src/navigators/index';

// MIDDLEWARE
const middewares = [
  thunkMiddleware,
  promise(),
];

const rootReducer = combineReducers({
  productReducer,
});


// STORE
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middewares))
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
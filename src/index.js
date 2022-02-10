/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Routes from './routes';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <StatusBar />
    <Routes />
  </Provider>
);

export default App;

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux'

import counterStore from './src/stores/counter'

import MainStackRouter from './src/routers/MainStackRouter';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={counterStore}>
        <MainStackRouter />
      </Provider>
    );
  }
}
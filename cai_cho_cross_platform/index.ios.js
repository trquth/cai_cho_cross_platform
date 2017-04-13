/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './src/App';

export default class cai_cho_cross_platform extends Component {
  store = createStore(AppReducer);
  render() {
    return (
      <View>
        <Text>Loading..</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('cai_cho_cross_platform', () => App);

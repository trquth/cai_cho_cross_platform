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
//import App from './src/3rdreactnavigation/App';
import App2 from './src/srcdemo/app/app';
import App3 from './src/practicenavigation/App';
import App4 from './src/reduxexample/App';
import App5 from './src/stackandrawer/js/setup';

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

AppRegistry.registerComponent('cai_cho_cross_platform', () => App5);

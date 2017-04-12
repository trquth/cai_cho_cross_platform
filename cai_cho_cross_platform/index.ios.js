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
// Redux
import { Provider } from 'react-redux'
import { createStore } from 'redux';

//import store from './src/app/store'
// Navigation
import TabBarNavigation from './src/app/tabBar/views/TabBarNavigation'

import AppReducer from './src/app2/src/reducers';
import AppWithNavigationState from './src/app2/src/navigators/AppNavigator';


export default class cai_cho_cross_platform extends Component {
  store = createStore(AppReducer);
  render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('cai_cho_cross_platform', () => cai_cho_cross_platform);

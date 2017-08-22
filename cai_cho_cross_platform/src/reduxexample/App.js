import React from 'react';
import { Provider } from 'react-redux';
import store from './Store';
import AppWithNavigationState from './navigators/AppNavigator';

export default class ReduxExampleApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
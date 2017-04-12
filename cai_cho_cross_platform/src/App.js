import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import store from './bootstrap/store';
import MainLayoutContainer from '../src/mobile/navigation_configuration/NavigationConfiguration';
import TabBarNavigation from './app/tabBar/views/TabBarNavigation';
import AppWithNavigationState from './mobile/navigation_configuration/NavigationConfiguration'; 

export default class App extends Component {
    render() {
        return (<Provider store={store}>
            <AppWithNavigationState />
        </Provider>)
    }
}
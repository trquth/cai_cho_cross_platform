import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import store from './store';
import { createStore } from 'redux';
import TabBarNavigation from './tabBar/views/TabBarNavigation'

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <TabBarNavigation />
            </Provider>
        )
    }
}
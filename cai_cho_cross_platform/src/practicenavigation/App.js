import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import store from './Store';
import { createStore } from 'redux';
import TabBarNavigation from './tabBar/presenters/TabBarNavigation'

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <TabBarNavigation />
            </Provider>
        )
    }
}
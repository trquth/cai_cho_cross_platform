import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import store from './bootstrap/store';
import AppWithNavigationState from "./navigators/AppNavigator";

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return
    }
}

const ConnectedApp = connect(state => ({
}), dispatch => ({
}))(App)

export default function provider() {
    return <Provider store={store}>
        <AppWithNavigationState />
    </Provider>
}
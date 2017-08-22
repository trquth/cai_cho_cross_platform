'use strict'

// React
import React, { Component } from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation';
import { NavigatorTabOne } from '../NavigationConfiguration';
// Redux
import { connect } from 'react-redux'
// Icon
import Icon from 'react-native-vector-icons/FontAwesome'

const multipleState = false;

const mapStateToProps = (state) => {
    return {
        navigationState: state.tabOne
    }
}

class TabOneNavigation extends Component {
    static navigationOptions = {
        tabBarLabel: 'Tab One',
        tabBarIcon: ({ tintColor }) => <Icon size={20} name={'cogs'} color={tintColor} />
    }

    render() {
        const { navigationState, dispatch } = this.props
        if (multipleState) {
            return <NavigatorTabOne
                navigation={
                    addNavigationHelpers({
                        dispatch: dispatch,
                        state: navigationState
                    })
                }
            />
        } else {
            return <NavigatorTabOne
            />
        }
    }
}
export default connect(mapStateToProps)(TabOneNavigation)

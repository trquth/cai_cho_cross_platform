'use strict'

// React
import React, { Component } from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation';
import { NavigatorTabTwo } from '../NavigationConfiguration';

// Redux
import { connect } from 'react-redux'

// Icon
import Icon from 'react-native-vector-icons/FontAwesome'
//
const multipleState = false

const mapStateToProps = (state) => {
    return {
        navigationState: state.tabTwo
    }
}

class TabTwoNavigation extends Component {
    static navigationOptions = {
        tabBarLabel: 'Tab Two',
        tabBarIcon: ({ tintColor }) => <Icon size={20} name={'cogs'} color={tintColor} />
    }

    render() {
        const { navigationState, dispatch } = this.props
        if (multipleState) {
            return (
                <NavigatorTabTwo
                    navigation={
                        addNavigationHelpers({
                            dispatch: dispatch,
                            state: navigationState
                        })
                    }
                />
            )
        } else {
            return <NavigatorTabTwo />
        }

    }
}
export default connect(mapStateToProps)(TabTwoNavigation)

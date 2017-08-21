'use strict'

// React
import React, { Component } from 'react'
import {TabBar} from '../NavigationConfiguration';

// Navigation
import { addNavigationHelpers } from 'react-navigation'

//Redux
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        navigationState: state.tabBar,
    }
}

class TabBarNavigation extends Component {

    render() {
        const { dispatch, navigationState } = this.props
        return (
            <TabBar
                navigation={
                    addNavigationHelpers({
                        dispatch: dispatch,
                        state: navigationState,
                    })
                }
            />
        )
    }
}

export default connect(mapStateToProps)(TabBarNavigation)

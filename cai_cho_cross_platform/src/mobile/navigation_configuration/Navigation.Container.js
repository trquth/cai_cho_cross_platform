import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { NavigationMobile } from './NavigationConfiguration';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome'


class Navigation extends Component {
    render() {
        const { nav, dispatch } = this.props
        return (
            <NavigationMobile
                navigation={
                    addNavigationHelpers({
                        dispatch: dispatch,
                        state: nav
                    })
                }
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        nav: state.navigation,
    }
}

export default connect(mapStateToProps)(Navigation)
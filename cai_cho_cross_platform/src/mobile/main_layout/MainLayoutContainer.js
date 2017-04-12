import { React, Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import { NavigationMobile } from '../navigation_configuration/NavigationConfiguration';

class MainLayoutContainer extends Component {
    render() {
        const { navigationState, dispatch } = this.props
        return (
            <NavigationMobile
                navigation={
                    addNavigationHelpers({
                        dispatch: dispatch,
                        state: navigationState
                    })
                }
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        navigationState: state.navigationMobile
    }
}
export default connect(mapStateToProps)(MainLayoutContainer)
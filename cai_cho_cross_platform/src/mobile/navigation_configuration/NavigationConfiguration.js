import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import ActivityContainer from '../activity/ActivityContainer';

const routeConfiguration = {
    ActivityContainer: { screen: ActivityContainer },
}

export const NavigationMobile = StackNavigator(routeConfiguration);

const AppWithNavigationState = ({ dispatch, nav }) => (
    <NavigationMobile navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import ActivityContainer from "../mobile/activity/ActivityContainer";


export const AppNavigator = StackNavigator({
    Activity: { screen: ActivityContainer },

});

const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
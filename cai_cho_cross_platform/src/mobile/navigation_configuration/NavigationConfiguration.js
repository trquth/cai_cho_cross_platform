import React, { PropTypes } from 'react';
import { StackNavigator } from 'react-navigation';
import ActivityContainer from '../activity/ActivityContainer';

const routeConfiguration = {
    Activity: { screen: ActivityContainer },
}

const stackNavigatorConfiguration = {

}

export const NavigationMobile = StackNavigator(routeConfiguration, stackNavigatorConfiguration);

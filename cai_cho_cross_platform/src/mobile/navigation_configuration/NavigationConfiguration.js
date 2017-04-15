import React, { PropTypes } from 'react';
import { Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ActivityContainer from '../activity/Activity.Container';

const routeConfiguration = {
    Activity: {
        screen: ActivityContainer,
    }
}

const stackNavigatorConfiguration = {
    initialRouteName: 'Activity',
    headerMode: 'screen'
}

const NavigationMobile = StackNavigator({
    ...routeConfiguration,
    Index: { screen: ActivityContainer, }
},
    stackNavigatorConfiguration);

const NavigationWithoutRedux = () => <NavigationMobile />;

export {
    NavigationMobile,
    NavigationWithoutRedux
}

import React, { PropTypes } from 'react';
import { Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ActivityContainer from '../activity/Activity.Container';
import DemoContainer from '../demo/demo';

const routeConfiguration = {
    Activity: {
        screen: ActivityContainer,
        navigationOptions: {
            title: 'x',
            headerLeft: 'x_button'
        }
    },
    Demo: {
        screen: DemoContainer,
        // navigationOptions: {
        //     title: 'y',
        //     headerLeft: 'y_button'
        // }
    }
}

const stackNavigatorConfiguration = {
    initialRouteName: 'Demo',
    headerMode: 'screen'
}

export const NavigationMobile = StackNavigator(routeConfiguration, stackNavigatorConfiguration);

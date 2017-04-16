import React, { PropTypes } from 'react';
import { Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ActivityContainer from '../activity/Activity.Container';
import ProfileContainer from '../profile/Profile.Container';
import OrderContainer from '../order/Order.Container';

const routeConfiguration = {
    Activity: {
        screen: ActivityContainer,
    },
    Profile: {
        screen: ProfileContainer
    },
    Order: {
        screen: OrderContainer
    }
}

const stackNavigatorConfiguration = {
    initialRouteName: 'Order',
    headerMode: 'screen'
}

const NavigationMobile = StackNavigator({
    ...routeConfiguration,
},
    stackNavigatorConfiguration);

const NavigationWithoutRedux = () => <NavigationMobile />;

export {
    NavigationMobile,
    NavigationWithoutRedux
}

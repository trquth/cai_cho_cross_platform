import React, { PropTypes } from 'react';
import { Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ActivityContainer from '../activity/Activity.Container';
import ProfileContainer from '../profile/Profile.Container';
import OrderContainer from '../order/Order.Container';
import ProductDetailContainer from '../product_detail/ProductDetail.Container';

const routeConfiguration = {
    Activity: {
        screen: ActivityContainer,
    },
    Profile: {
        screen: ProfileContainer
    },
    Order: {
        screen: OrderContainer
    },
    ProductDetail: {
        screen: ProductDetailContainer
    }
}

const stackNavigatorConfiguration = {
    initialRouteName: 'ProductDetail',
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

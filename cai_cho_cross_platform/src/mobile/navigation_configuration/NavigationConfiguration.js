import React, { PropTypes } from 'react';
import { Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ActivityContainer from '../activity/Activity.Container';
import ProfileContainer from '../profile/Profile.Container';
import OrderContainer from '../order/Order.Container';
import ProductDetailContainer from '../product_detail/ProductDetail.Container';
import ExploreContainer from '../explore/Explore.Container';
import SettingContainer from '../setting/Setting.Container';

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
    },
    Explore: {
        screen: ExploreContainer
    },
    Setting: {
        screen: SettingContainer
    }
}

const stackNavigatorConfiguration = {
    initialRouteName: 'Activity',
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

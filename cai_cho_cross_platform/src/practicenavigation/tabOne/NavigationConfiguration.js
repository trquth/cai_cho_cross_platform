'use strict'

import { StackNavigator } from 'react-navigation'

// Screens
import ScreenOneInTabOne from './presenters/ScreenOneInTabOne'
import ScreenTwoInTabOne from './presenters/ScreenTwoInTabOne'

const routeConfiguration = {
    ScreenOneInTabOne: { screen: ScreenOneInTabOne },
    ScreenTwoInTabOne: { screen: ScreenTwoInTabOne },
}

// going to disable the header for now
const stackNavigatorConfiguration = {
    headerMode: 'none',
    //initialRouteName: 'ScreenOneInTabOne'
}

export const NavigatorTabOne = StackNavigator(routeConfiguration, stackNavigatorConfiguration)

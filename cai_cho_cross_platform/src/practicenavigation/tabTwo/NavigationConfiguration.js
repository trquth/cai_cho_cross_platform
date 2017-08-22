'use strict'

import { StackNavigator } from 'react-navigation'

// Screens
import ScreenOneInTabTwo from './presenters/ScreenOneInTabTwo'
import ScreenTwoInTabTwo from './presenters/ScreenTwoInTabTwo'

const routeConfiguration = {
    ScreenOneInTabTwo: { screen: ScreenOneInTabTwo },
    ScreenTwoInTabTwo: { screen: ScreenTwoInTabTwo },
}

// going to disable the header for now
const stackNavigatorConfiguration = {
    headerMode: 'none',
    //initialRouteName: 'ScreenOneInTabTwo'
}

export const NavigatorTabTwo = StackNavigator(routeConfiguration, stackNavigatorConfiguration)

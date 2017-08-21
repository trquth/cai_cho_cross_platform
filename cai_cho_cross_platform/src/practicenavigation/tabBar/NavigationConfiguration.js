'use strict'
import { TabNavigator } from 'react-navigation'
// Tab-Navigators
import TabOneNavigation from '../tabOne/presenters/TabOneNavigation'
import TabTwoNavigation from '../tabTwo/presenters/TabTwoNavigation'


const routeConfiguration = {
  TabOneNavigation: { screen: TabOneNavigation },
  TabTwoNavigation: { screen: TabTwoNavigation },
}

const tabBarConfiguration = {
  //...other configs
  tabBarOptions: {
    // tint color is passed to text and icons (if enabled) on the tab bar
    activeTintColor: 'white',
    inactiveTintColor: 'blue',
    // background color is for the tab component
    activeBackgroundColor: 'blue',
    inactiveBackgroundColor: 'white',
  }
}

export const TabBar = TabNavigator(routeConfiguration, tabBarConfiguration)


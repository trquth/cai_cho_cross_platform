'use strict'
import { TabNavigator } from 'react-navigation'
// Tab-Navigators
import TabOneNavigation from '../tabOne/views/TabOneNavigation'


const routeConfiguration = {
  TabOneNavigation: { screen: TabOneNavigation },
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

export const tabBarReducer = (state, action) => {
  console.log('tesst abc', action)
  if (action.type === 'JUMP_TO_TAB') {
    return { ...state, index: 0 }
  } else {
    return TabBar.router.getStateForAction(action, state)
  }
}

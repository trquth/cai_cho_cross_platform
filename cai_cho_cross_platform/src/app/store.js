'use strict'

// Redux
import { applyMiddleware, combineReducers, createStore } from 'redux'
//import logger from 'redux-logger'

// Navigation
import { NavigatorTabOne } from './tabOne/navigationConfiguration'
import { TabBar, tabBarReducer } from './tabBar/navigationConfiguration'

// Middleware
const middleware = () => {
  return applyMiddleware()
}

export default createStore(
  combineReducers({
    tabBar: tabBarReducer,

    tabOne: (state,action) => NavigatorTabOne.router.getStateForAction(action,state),
  }),
  middleware(),
)

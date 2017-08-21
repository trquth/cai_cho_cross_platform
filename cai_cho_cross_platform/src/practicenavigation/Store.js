'use strict'

// Redux
import { applyMiddleware, combineReducers, createStore } from 'redux'
import logger from 'redux-logger'

// Navigation
import { NavigatorTabOne } from './tabOne/NavigationConfiguration'
import { NavigatorTabTwo } from './tabTwo/NavigationConfiguration'
import { TabBar } from './tabBar/NavigationConfiguration'
import tabBarReducer from './tabBar/TabBar.Reducer'

// Middleware
const middleware = () => {
    return applyMiddleware(logger)
}

export default createStore(
    combineReducers({
        tabBar: tabBarReducer,

        tabOne: (state, action) => NavigatorTabOne.router.getStateForAction(action, state),

        tabTwo: (state, action) => NavigatorTabTwo.router.getStateForAction(action, state),

    }),
    middleware(),
)

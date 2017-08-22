'use strict'

// Redux
import { applyMiddleware, combineReducers, createStore } from 'redux'
import logger from 'redux-logger'

// Navigation
import { NavigatorTabOne } from './tabOne/NavigationConfiguration'
import { NavigatorTabTwo } from './tabTwo/NavigationConfiguration'
import { TabBar } from './tabBar/NavigationConfiguration'
import tabBarReducer from './tabBar/TabBar.Reducer'
import TabOneReducer from './tabOne/TabOne.Reducer'
import TabTwoReducer from './tabTwo/TabTwo.Reducer'

// Middleware
const middleware = () => {
    return applyMiddleware(logger)
}

export default createStore(
    combineReducers({
        tabBar: tabBarReducer,

        // tabOne: (state, action) => {
        //     let x = NavigatorTabOne.router.getStateForAction(action, state)
        //     console.log('RUSULT--->', x)
        //     return x
        // },
        tabOne: TabOneReducer,
        // tabTwo: (state, action) => {
        //     let x = NavigatorTabTwo.router.getStateForAction(action, state)
        //     console.log('RESULT 2--->', x)
        //     return x
        // },
        tabTwo: TabTwoReducer

    }),
    middleware(),
)

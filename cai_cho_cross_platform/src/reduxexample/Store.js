'use strict'

// Redux
import { applyMiddleware, combineReducers, createStore } from 'redux'
import logger from 'redux-logger'

// Navigation
import AppReducer from './reducers';

// Middleware
const middleware = () => {
    return applyMiddleware(logger)
}

export default createStore(
    combineReducers({
        AppReducer: AppReducer,
    }),
    middleware(),
)

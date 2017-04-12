import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducers from './reducers';
import { composeWithDevTools } from 'remote-redux-devtools';

/**
 *  Redux Store configuration
 */
const initialState = {};

const middlewares = [
    logger
];

//create store
let store = createStore(reducers, initialState,
    composeWithDevTools(
        applyMiddleware(...middlewares)
    )
);

export default store;
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { composeWithDevTools } from 'remote-redux-devtools';

/**
 *  Redux Store configuration
 */
const initialState = {};

const middlewares = [
];

//create store
let store = createStore(reducers, initialState,
    composeWithDevTools(
        applyMiddleware(...middlewares)
    )
);

export default store;
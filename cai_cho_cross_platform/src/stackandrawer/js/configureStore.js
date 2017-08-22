import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import logger from 'redux-logger'


export default function configureStore() {
  const enhancer = compose(applyMiddleware(thunk, logger));
  const store = createStore(reducer, enhancer);
  return store;
}

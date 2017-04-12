import { combineReducers } from 'redux';
import AppNavigatorReducer from '../navigators/AppNavigatorReducer';
/**
 * This place is to register all reducers of the app.
 */

export default combineReducers({
    AppNavigator: AppNavigatorReducer
})
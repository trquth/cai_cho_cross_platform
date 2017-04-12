import { combineReducers } from 'redux';
import { NavigationMobile } from '../mobile/navigation_configuration/NavigationConfiguration';
/**
 * This place is to register all reducers of the app.
 */

export default combineReducers({
    navigationMobile: (state, action) => NavigationMobile.router.getStateForAction(action, state)
})
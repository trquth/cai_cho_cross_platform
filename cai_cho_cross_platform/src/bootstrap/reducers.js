import { combineReducers } from 'redux';
import navigationReducer from '../mobile/navigation_configuration/Navigation.Reducer';
import activityReducer from '../mobile/activity/Acitity.Reducer';

export default combineReducers({
    navigation: navigationReducer,
    activity: activityReducer
})

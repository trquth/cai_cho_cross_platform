import { combineReducers } from 'redux';
import navigationReducer from '../mobile/navigation_configuration/Navigation.Reducer';

export default combineReducers({
    navigation: navigationReducer
})

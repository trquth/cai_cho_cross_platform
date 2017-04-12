import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from './AppNavigator';

const initialState = {};

export default function navigator(state = initialState, action) {
    switch (action.type) {
        default: return state;
    }
}
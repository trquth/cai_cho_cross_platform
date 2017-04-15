import { NavigationActions } from 'react-navigation';
import { NavigationMobile } from './NavigationConfiguration';

const initialState = {
    index: 0,
    routes: [
        { key: 'InitA', routeName: 'Activity' },
    ],
}

export default function navigationReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
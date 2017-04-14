import { NavigationActions } from 'react-navigation';
import { NavigationMobile } from './NavigationConfiguration';

const initialState = {
    index: 1,
    routes: [
        { key: 'InitA', routeName: 'Activity' },
        { key: 'InitB', routeName: 'Demo' },
    ],
}

export default function navigationReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
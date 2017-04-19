import { NavigationActions } from 'react-navigation';
import { NavigationMobile } from './NavigationConfiguration';
import * as constant from './../../assets/constant/constant';

const initialState = {
    index: 0,
    routes: [
        { key: 'Activity', routeName: 'Activity' },
    ],
}

export default function navigationReducer(state = initialState, action) {
    switch (action.type) {
        case constant.ACTIVITY_SCREEN:
            return NavigationMobile.router.getStateForAction(NavigationActions.navigate({ routeName: 'Activity' }), state);
        default:
            return NavigationMobile.router.getStateForAction(action, state);
    }
}
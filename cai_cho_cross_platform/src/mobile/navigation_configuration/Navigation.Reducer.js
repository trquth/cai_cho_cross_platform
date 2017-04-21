import { NavigationActions } from 'react-navigation';
import { NavigationMobile } from './NavigationConfiguration';
import * as constant from './../../assets/constant/constant';

const initialState = {
    index: 0,
    routes: [
        { key: 'ProductServer', routeName: 'ProductServer' },
    ],
}

export default function navigationReducer(state = initialState, action) {
    switch (action.type) {
        case constant.ACTIVITY_SCREEN:
            return NavigationMobile.router.getStateForAction(NavigationActions.navigate({ routeName: 'Activity' }), state);
        case constant.EXPLORE_SCREEN:
            return NavigationMobile.router.getStateForAction(NavigationActions.navigate({ routeName: 'Explore' }), state);
        case constant.SETTING_SCREEN:
            return NavigationMobile.router.getStateForAction(NavigationActions.navigate({ routeName: 'Setting' }), state);
        default:
            return NavigationMobile.router.getStateForAction(action, state);
    }
}
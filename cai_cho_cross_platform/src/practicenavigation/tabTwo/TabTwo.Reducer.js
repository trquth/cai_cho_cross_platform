import { NavigationActions } from 'react-navigation';
import { NavigatorTabTwo } from './NavigationConfiguration'

export default function TabTwoReducer(state, action) {
    switch (action.type) {
        case 'JUMP_TO_ROOT': {
            return {
                ...state,
                routes: [{
                    routeName: 'ScreenOneInTabTwo',
                    key: 'ÂFASFSA', // write your function to generate route key, it's important
                }],
                index: 0,
            };
        }
        default: {
            let newState = NavigatorTabTwo.router.getStateForAction(action, state);
            return newState || state;
        }
    }

}
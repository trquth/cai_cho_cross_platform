import { NavigatorTabOne } from './NavigationConfiguration';

export default function TabOneReducer(state, action) {
    switch (action.type) {
        default: {
            let newState = NavigatorTabOne.router.getStateForAction(action, state);
            return newState || state
        }
    }

}
import { TabBar } from './NavigationConfiguration'

export default function tabBarReducer(state, action) {
    // if (action.type === 'JUMP_TO_TAB') {
    //     return { ...state, index: 0 }
    // } else {
    //     let receivedResult = TabBar.router.getStateForAction(action, state)
    //     return receivedResult
    // }
    let newState = TabBar.router.getStateForAction(action, state)
    return newState || state
}
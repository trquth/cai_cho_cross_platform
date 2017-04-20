export function backToScreen(screen) {
    return (dispatch, getState) => {
        return dispatch({
            type: screen
        })
    }
}
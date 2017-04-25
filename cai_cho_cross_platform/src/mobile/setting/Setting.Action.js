export function createDatabase() {
    return (dispatch, getState) => {
        return dispatch({
            type: 'SETTING_CREATE_DATABASE'
        })
    }
}
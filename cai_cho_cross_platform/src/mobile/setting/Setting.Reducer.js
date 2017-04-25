import {
    INITIALIZE_APP
} from './ProductServer.Action';

const initialState = {
    success: false,
};


export default function (state = initialState, action) {
    switch (action.type) {
        case "SETTING_CREATE_DATABASE":
            {
                return { ...state, success: action.success }
            }
    }
    return state;
}
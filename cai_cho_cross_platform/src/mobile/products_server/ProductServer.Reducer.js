import {
    INITIALIZE_APP
} from './ProductServer.Action';

const initialState = {
    fetching: false,
    fetched: false,
    error: null,
    initialized: false,
    products: [],
};


export default function (state = initialState, action) {
    switch (action.type) {
        case INITIALIZE_APP + "_FULFILLED":
            {
                let data = action.payload;
                return {
                    ...state,
                    initialized: true,
                    fetching: false,
                    fetched: true,
                    products: data,
                };
            }
        case "STOCK_TAKE_LOAD_ALL_STOCK_ITEMS":
            {
                let data = action.items;
                return {
                    ...state,
                    products: action.pageIdx === 0 ? data : [...state.products, ...data],
                };
            }
    }
    return state;
}
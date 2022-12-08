import getFromLocalStorage from "../utilityFunctions/localStorage/getFromLocalStorage";

const initialState = getFromLocalStorage('cart') || [];

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case 'cart/addedToCart': {
            return [
                ...state,
                action.payload
            ];
        }
        case 'cart/removedFromCart': {
            const productIndex = state.findIndex(id => id === action.payload);
            const newState = state.slice(0, productIndex).concat(state.slice(productIndex + 1));
            return newState;
        }
            

        default:
            return state;
    }
}
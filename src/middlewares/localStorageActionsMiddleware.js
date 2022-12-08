import setToLocalStorage from "../utilityFunctions/localStorage/setToLocalStorage";

const localStorageActionsMiddleware = storeAPI => next => action => {
    if (action.type === 'cart/addedToCart') {
        setToLocalStorage('addToCart', action.payload);
    } else if (action.type === 'cart/removedFromCart') {
        setToLocalStorage('removeFromCart', action.payload);
    }
    return next(action);
}

export default localStorageActionsMiddleware;
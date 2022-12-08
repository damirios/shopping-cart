import { combineReducers } from 'redux';

import productsReducer from './productsReducer'
import filtersReducer from './filtersReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
    products: productsReducer,
    filters: filtersReducer,
    cart: cartReducer
});

export default rootReducer;
import arrayToObject from "../utilityFunctions/arrayToObject";

import { handcrafts } from "../mock server/products";

const initialState = {
    category: 'all',
    color: 'all',
    text: ''
}

export default function filtersReducer(state = initialState, action) {
    switch (action.type) {
        case 'filters/filtersChanged': {
            const {category, color, text} = action.payload;
            const productsArray = Object.values(handcrafts);

            const filteredProductsArray = productsArray.filter(product => {
                if ( product.title.toLowerCase().includes(text.toLowerCase().trim()) ) {
                    if (category === 'all' || category === product.category) {
                        if (color === 'all' || color === product.color) {
                            return true;
                        } else {
                            return false;
                        }
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            });

            const filteredProductsObject = arrayToObject(filteredProductsArray);
            
            return {
                products: filteredProductsObject,
                filters: {
                    category: category,
                    color: color,
                    text: text
                }
            }; 
        }

        default:
            return state;
    }
}
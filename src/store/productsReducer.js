import { handcrafts } from "../mock server/products";
import arrayToObject from "../utilityFunctions/arrayToObject";

const initialState = {
    ...handcrafts
}

export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case 'products/productsFiltered': {
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
                ...filteredProductsObject
            }
        }

        default:
            return state;
    }
}
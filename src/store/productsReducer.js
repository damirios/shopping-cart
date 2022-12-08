import { handcrafts } from "../mock server/products";

const initialState = {
    ...handcrafts
}

export default function filtersReducer(state = initialState, action) {
    switch (action.type) {
        
        default:
            return state;
    }
}
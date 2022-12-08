import { useSelector, useDispatch } from "react-redux";

export default function AddToShopingCart(props) {
    const {className, productID} = props;
    
    const productsInCart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    function handleAddClick() {
        dispatch({
            type: 'cart/addedToCart',
            payload: productID
        });
    }

    function handleRemoveClick() {
        dispatch({
            type: 'cart/removedFromCart',
            payload: productID
        });
    }
    
    if (productsInCart.includes(productID)) {
        return (
            <div className={className}>
                <button onClick={handleRemoveClick}>Remove from shopping cart</button>
            </div>
        );
    }

    
    return (
        <div className={className}>
            <button onClick={handleAddClick}>Add product to shopping cart</button>
        </div>
    );
}
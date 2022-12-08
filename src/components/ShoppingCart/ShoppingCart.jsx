import { useSelector } from "react-redux";
import { handcrafts } from "../../mock server/products";
import SingleProduct from "./SingleProduct";

export default function ShoppingCart(props) {
    
    const {cart} = useSelector(state => state);
    
    if (cart.length === 0) { // if cart is empty
        return (
            <div className={`cart ${props.className}`}>
                You add nothing to the shopping cart
            </div>
        );
    }
    
    return (
        <div className={`cart ${props.className}`}>
            {/* <SingleProduct isTitle /> */}
            <div className="cart__first-row">
                Shopping Cart
            </div>
            {cart.map(id => {
                const product = handcrafts[id];
                return <SingleProduct product={product} key={id} />;
            })}
        </div>
    );
}
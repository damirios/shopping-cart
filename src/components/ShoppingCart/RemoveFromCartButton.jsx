import { useDispatch } from "react-redux";

export default function RemoveFromCartButton(props) {
    const {className, id} = props;

    const dispatch = useDispatch();

    function handleRemoveClick() {
        dispatch({
            type: 'cart/removedFromCart',
            payload: id
        });
    }

    return (
        <div className={className}>
            <button onClick={handleRemoveClick}>
                Remove from cart
            </button>
        </div>
    );
}
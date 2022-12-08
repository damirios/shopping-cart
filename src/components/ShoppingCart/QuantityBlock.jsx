import { useState } from "react";

export default function QuantityBlock() {
    const [count, setCount] = useState(1);

    function handleMinusClick() {
        if (count !== 1) {
            setCount(count - 1);
        }
    }

    function handlePlusClick() {
        setCount(count + 1);
    }

    function handleInputChange(e) {
        const userInput = e.target.value;
        if (!isNaN(+userInput)) {
            setCount(userInput);
        }
    }

    function handleFocusOut(e) {
        const userInput = e.target.value;
        if (userInput === '' || userInput < 1) {
            setCount(1);
        } else if (+userInput !== Math.round(+userInput)) {
            setCount(Math.round(+userInput));
        } else {
            setCount(+userInput);
        }
        
    }

    return (
        <div className="product-cart__quantity quantity">
            <div onClick={handleMinusClick} className="quantity__minus">-</div>
            <div className='quantity__count'>
                <input type="text" value={count} onBlur={handleFocusOut} onChange={handleInputChange} />
            </div>
            <div onClick={handlePlusClick} className="quantity__plus">+</div>
        </div>
    );
}
import { Link } from 'react-router-dom';

function Header(props) {
    const {cartState, changeCartState} = props;

    function handleCartClick() {
        changeCartState({
            ...cartState,
            showCart: !cartState.showCart
        });  
    }

    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__title">
                        <Link to='/'>Fake Shop!</Link>
                    </div>
                    <div className="header__nav">
                        <ul className='header__list'>
                            <li className='header__item'>
                                <Link className='header__link' to="/">Homepage</Link>
                            </li>
                            <li className='header__item'>
                                <Link className='header__link' to="/shop">Shop</Link>
                            </li>
                            <li className='header__item'>
                                <Link className='header__link' to="/contacts">Contacts</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="header__shop-cart">
                        <span onClick={handleCartClick}>
                            {cartState.showCart ? 'Close cart' : 'Shopping cart'}
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
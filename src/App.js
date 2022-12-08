import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Shop from './components/Shop';
import Contacts from './components/Contacts';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Footer from './components/Footer';

import './styles/css/style.css';

function App() {

    const [cart, setCart] = useState({
        showCart: false
    });

    return (
        <div className="App">
            <Router>
                <Header cartState={cart} changeCartState={setCart}/>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/shop' element={<Shop />} />
                    <Route path='/contacts' element={<Contacts />} />
                </Routes>
                <ShoppingCart className={cart.showCart ? 'active' : ''} />
                <Footer />
            </Router>
        </div>
    );
}

export default App;

import { Link } from 'react-router-dom';

function Main() {

    return (
        <main className="main content">
            <div className="container">
                <div className="main__column">
                    <div className="main__title">Welcome to Irina's Handcraft Shop!</div>
                    <div className="main__subtitle">This is fake shop. Just educational project.</div>
                    <div className="main__description">
                        <div className="main__list-title">
                            <h1>Links list:</h1>
                        </div>
                        <ul className="main__list">
                            <li className="main__item">
                                <Link to='/shop' className='main__link'>Shop</Link>
                            </li>
                            <li className="main__item">
                                <Link to='/contacts' className='main__link'>Contacts</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;
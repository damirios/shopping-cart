import AllMiniCards from "./Cards/AllMiniCards";
import Search from "./Search/Search";

import { useSelector } from "react-redux";



function Shop() {
    const {category, color, text} = useSelector(state => state.filters);
    
    return (
        <div className="shop content">
            <div className="container">
                <div className="shop__column">
                    <Search />
                    <div className="shop__filters">
                        <h2 className="shop__title">Search options: </h2>
                        <ul className="shop__filters-list">
                            <li>
                                Category: <span>{category}</span> 
                            </li>
                            <li>
                                Color: <span>{color || '-'}</span>
                            </li>
                            <li>
                                Searching text: <span>{text || '-'}</span>
                            </li>
                        </ul>
                        
                    </div>
                    <div className="shop__grid">
                        <AllMiniCards />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
import favorite from '../../assets/images/favorite.svg'; 
import AddToShoppingCart from './AddToShoppingCart';

export default function MiniCard(props) {
    const { id, title, color, category, imageSRC, price } = props.card;

    return (
        <div className="mini-card">
            <div className="mini-card__image">
                <img src={imageSRC} alt="mini-card" />
            </div>
            <div className="mini-card__title">{title}</div>
            <div className="mini-card__category">Category: <span>{category}</span></div>
            <div className="mini-card__color">
                Color: <span>{color}</span>
                <div className={`mini-card__color-block ${color}`}></div>
            </div>
            <div className="mini-card__price">
                Price: <span>{price}$</span>
            </div>
            <div className="mini-card__cart">
                <AddToShoppingCart productID={id} className="mini-card__cart-add" />
            </div>
            <div className="mini-card__favorite-button">
                <img src={favorite} alt="favorite" />
            </div>
        </div>
    );
}
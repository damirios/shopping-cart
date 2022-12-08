import QuantityBlock from './QuantityBlock';
import RemoveFromCartButton from './RemoveFromCartButton';

export default function SingleProduct(props) {
    const {product, isTitle} = props;

    return (
        <div className='cart__product product-cart'>
            <div className="product-cart__image">
                {isTitle ? 'Image' : <img src={product.imageSRC} alt="product" />}
            </div>
            <div className="product-cart__title">
                {isTitle ? 'Title' : <span>{product.title}</span>}
            </div>
            <div className="product-cart__price">
                {isTitle ? 'Price' : <span>{product.price}$</span>}
            </div>
            {isTitle ? null : <QuantityBlock />}
            {/* {isTitle ? null : <FavoriteButton className='product-cart__favorite' />} */}
            {isTitle ? null : <RemoveFromCartButton id={product.id} className="product-cart__remove-product" />}
        </div>
    );
}
import favorite from '../../assets/images/favorite.svg';

export default function FavoriteButton(props) {
    const {className} = props;

    return (
        <div className={className}>
            <img src={favorite} alt="favorite" />
        </div>
    );
}
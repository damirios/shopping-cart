import MiniCard from "./MiniCard";
import store from "../../store/store";

export default function AllMiniCards(props) {
    const state = store.getState();
    const cardList = Object.values(state.products);

    if (cardList !== undefined) {
        return (
            cardList.map(card => {
                return <MiniCard key={card.id} card={card} />
            })
        );
    } else {
        return null;
    }
}
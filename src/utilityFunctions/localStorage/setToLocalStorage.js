export default function setToLocalStorage(action, chosenItem) {
    if (action === 'addToCart') {
        const newItems = [...JSON.parse(localStorage.getItem('cart')), chosenItem];
        const stringifyItem = JSON.stringify(newItems);
        localStorage.setItem('cart', stringifyItem);
    } else if (action === 'removeFromCart') {
        const items = JSON.parse(localStorage.getItem('cart'));
        const index = items.findIndex(item => item === chosenItem);
        const newItems = items.slice(0, index).concat(items.slice(index + 1));
        const stringifyItem = JSON.stringify(newItems);
        localStorage.setItem('cart', stringifyItem);
    }
}
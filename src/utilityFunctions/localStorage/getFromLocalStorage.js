export default function getFromLocalStorage(item) {
    return JSON.parse(localStorage.getItem(item));
}
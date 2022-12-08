export default function arrayToObject(array) {
    const obj = {};
    array.forEach(elem => {
        obj[elem.id] = elem;
    });
    return obj;
}
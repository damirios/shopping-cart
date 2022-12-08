export default function SelectColor(props) {
    const {color, setColor} = props;

    function handleChange(e) {
        setColor(e.target.value);
    }

    return (
        <div className="search__filter-color filter">
            <h1 className="filter__title">Select color</h1>
            <select value={color} onChange={handleChange} name="color" id="color">
                <option value="all">All</option>
                <option value="red">Red</option>
                <option value="pink">Pink</option>
                <option value="violet">Violet</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
            </select>
        </div>
    );
}
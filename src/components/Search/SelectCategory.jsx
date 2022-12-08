export default function SelectCategory(props) {
    const {category, setCategory} = props;

    function handleChange(e) {
        setCategory(e.target.value);
    }

    return (
        <div className="search__filter-category filter">
            <h1 className="filter__title">Select category</h1>
            <select value={category} onChange={handleChange} name="category" id="category">
                <option value="all">All</option>
                <option value="sewing">Sewing</option>
                <option value="crochet">Crochet</option>
                <option value="macrame">Macrame</option>
                <option value="painting">Painting</option>
                <option value="digital painting">Digital painting</option>
            </select>
        </div>
    );
}
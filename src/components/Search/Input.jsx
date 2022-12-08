export default function Input(props) {
    const {text, setText} = props;

    function handleChange(e) {
        setText(e.target.value);
    }

    return (
        <div className="search__input">
            <input value={text} onChange={handleChange} name='title' type="text" />
        </div>
    );
}
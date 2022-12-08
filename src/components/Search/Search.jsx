import SelectCategory from "./SelectCategory";
import SelectColor from "./SelectColor";
import SubmitButton from './SubmitButton';
import Input from './Input';

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";


export default function Search() {
    const {category, text, color} = useSelector(state => state.filters);
    const dispatch = useDispatch();

    const [inputText, setInputText] = useState(text);
    const [selectCategory, setSelectCategory] = useState(category);
    const [selectColor, setSelectColor] = useState(color);

    function handleSubmit(e) {
        e.preventDefault(); // отменяю перезагрузку страницы

        // получаю соответствующие продукты и изменяю состояние стора
        dispatch({
            type: 'filters/filtersChanged',
            payload: {
                category: selectCategory,
                color: selectColor,
                text: inputText
            }
        });
    }

    return (
        <div className="shop__search search">
            <form className="search__form" onSubmit={handleSubmit}>
                <Input text={inputText} setText={setInputText} />
                <SelectColor color={selectColor} setColor={setSelectColor} />
                <SelectCategory category={selectCategory} setCategory={setSelectCategory} />
                <SubmitButton />
            </form>
        </div>
    );
}
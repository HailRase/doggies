import React, {ChangeEvent, useState} from 'react';
import SearchButton from "../search-button/SearchButton";
import s from './SearchInput.module.scss'
type SearchInputPropsType = {
    onClick: (query: string) => void
}
const SearchInput: React.FC<SearchInputPropsType> = ({onClick}) => {
    const [query, setQuery] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setQuery(e.currentTarget.value)
    }
    const onSearchHandler = () => {
        onClick(query)
        console.log(query)
    }
    return (
        <div className={s.container}>
            <input type="text"
                   onChange={onChangeHandler}
                   />
            <SearchButton onClick={onSearchHandler}/>
        </div>
    );
};

export default SearchInput;
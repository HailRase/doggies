import React from 'react';
import SearchButton from "../search-button/SearchButton";
import s from './SearchInput.module.scss'

const SearchInput = () => {
    return (
        <div className={s.container}>
            <input type="text"/>
            <SearchButton/>
        </div>
    );
};

export default SearchInput;
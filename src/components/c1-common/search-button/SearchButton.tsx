import React from 'react';
import s from './SearchButton.module.scss'
import {ReactComponent as SearchIcon} from "../../../assets/search-button.svg";

const SearchButton = () => {
    return (
        <div className={s.container}>
            <SearchIcon className={s.search}/>
        </div>
    );
};

export default SearchButton;
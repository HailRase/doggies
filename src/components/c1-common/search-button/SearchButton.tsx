import React from 'react';
import s from './SearchButton.module.scss'
import {ReactComponent as SearchIcon} from "../../../assets/search-button.svg";
type SearchButtonPropsType = {
    onClick: () => void
}
const SearchButton: React.FC<SearchButtonPropsType> = ({onClick}) => {
    return (
        <div className={s.container} onClick={onClick}>
            <SearchIcon className={s.search}/>
        </div>
    );
};

export default SearchButton;
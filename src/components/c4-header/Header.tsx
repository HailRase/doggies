import React from 'react';
import SearchInput from "../c1-common/search-input/SearchInput";
import s from './Header.module.scss'
import PageLinker from "../c1-common/page-linker/PageLinker";
import {ReactComponent as Ham} from "../../assets/hamburger.svg";

type HeaderPropsType = {

    onNavActive: () => void
}
const Header:React.FC<HeaderPropsType> = ({onNavActive}) => {

    return (
        <div className={s.container}>
            <div className={s.hamburgerContainer} onClick={onNavActive}>
                <Ham className={s.hamburger}/>
            </div>
            <div className={s.searchBlock}>
                <SearchInput/>
            </div>
            <div className={s.pageLinkersBlock}>
                <PageLinker type={"smile"}/>
                <PageLinker type={"heart"}/>
                <PageLinker type={"sad"}/>
            </div>
        </div>
    );
};

export default Header;
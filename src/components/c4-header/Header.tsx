import React, {useEffect, useState} from 'react';
import SearchInput from "../c1-common/search-input/SearchInput";
import s from './Header.module.scss'
import PageLinker from "../c1-common/page-linker/PageLinker";
import {ReactComponent as Ham} from "../../assets/hamburger.svg";
import {useNavigate} from "react-router-dom";
import {fetchBreeds} from "../../bll/reducers/breeds-reducer";
import {useDispatch} from "react-redux";

type HeaderPropsType = {
    onNavActive: () => void
}
const Header: React.FC<HeaderPropsType> = ({onNavActive}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [query, setQuery] = useState('')

    const onSearchQueryHandler = (query: string) => {
        setQuery(query)
        navigate('/breeds')
    }
    useEffect(()=> {
        dispatch(fetchBreeds(0,5,0,query))
        },[dispatch,query])
    return (
        <div className={s.container}>
            <div className={s.hamburgerContainer} onClick={onNavActive}>
                <Ham className={s.hamburger}/>
            </div>
            <div className={s.searchBlock}>
                <SearchInput onClick={onSearchQueryHandler}/>
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
import React, {useState} from 'react';
import SearchInput from "../c1-common/search-input/SearchInput";
import s from './Header.module.scss'
import PageLinker from "../c1-common/page-linker/PageLinker";
import {ReactComponent as Ham} from "../../assets/hamburger.svg";
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

type HeaderPropsType = {
    onNavActive: () => void
}
const Header: React.FC<HeaderPropsType> = ({onNavActive}) => {
    const {pathname} = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [query, setQuery] = useState('')

    const onSearchQueryHandler = (query: string) => {
        setQuery(query)
        navigate('/breeds')
    }
    const toPageHandler = (page: "likes" | "favourites" | "dislikes") => {
        navigate(`/${page}`)
    }
    /*useEffect(()=> {
        dispatch(fetchBreeds(0,5,0,query))
        },[dispatch,query])*/
    return (
        <div className={s.container}>
            <div className={s.hamburgerContainer} onClick={onNavActive}>
                <Ham className={s.hamburger}/>
            </div>
            <div className={s.searchBlock}>
                <SearchInput onClick={onSearchQueryHandler}/>
            </div>
            <div className={s.pageLinkersBlock}>
                <PageLinker type={"likes"} activePage={pathname.slice(1)} callback={() => toPageHandler("likes")}/>
                <PageLinker type={"favourites"} activePage={pathname.slice(1)} callback={() => toPageHandler("favourites")}/>
                <PageLinker type={"dislikes"} activePage={pathname.slice(1)} callback={() => toPageHandler("dislikes")}/>
            </div>
        </div>
    );
};

export default Header;
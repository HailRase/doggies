import React from 'react';
import s from './NavMenu.module.scss'
import ContentItem from "../c2-greeting/content-item/ContentItem";
import {ReactComponent as CloseIcon} from "../../assets/close.svg";
import {useLocation, useNavigate} from "react-router-dom";

type NavMenuPropsType = {
    active: boolean
    onNavActive: () => void
}
const NavMenu:React.FC<NavMenuPropsType> = ({active,onNavActive}) => {
    const navigate = useNavigate()
    const {pathname} = useLocation()
    const toBreeds = () => {
        navigate('/breeds')
        onNavActive()
    }
    const toVoting = () => {
        navigate('/voting')
        onNavActive()
    }
    return (
        <div className={active ?`${s.container} ${s.show}` :s.container}>
            <div className={s.closeIconContainer} onClick={onNavActive}>
                <CloseIcon className={s.closeIcon}/>
            </div>
            <div className={s.contentItems}>
                <ContentItem name={"VOTING"} activePage={pathname.slice(1)} callback={toVoting} />
                <ContentItem name={"BREEDS"} activePage={pathname.slice(1)} callback={toBreeds} />
                <ContentItem name={"GALLERY"} activePage={pathname.slice(1)} />
            </div>
        </div>
    );
};

export default NavMenu;
import React from 'react';
import s from './NavMenu.module.scss'
import ContentItem from "../c2-greeting/content-item/ContentItem";
import {ReactComponent as CloseIcon} from "../../assets/close.svg";
import {useNavigate} from "react-router-dom";

type NavMenuPropsType = {
    active: boolean
    onNavActive: () => void
}
const NavMenu:React.FC<NavMenuPropsType> = ({active,onNavActive}) => {
    const navigate = useNavigate()
    const toBreeds = () => {
        navigate('/breeds')
        onNavActive()
    }
    return (
        <div className={active ?`${s.container} ${s.show}` :s.container}>
            <div className={s.closeIconContainer} onClick={onNavActive}>
                <CloseIcon className={s.closeIcon}/>
            </div>
            <div className={s.contentItems}>
                <ContentItem name={"VOTING"} />
                <ContentItem name={"BREEDS"} callback={toBreeds}/>
                <ContentItem name={"GALLERY"} />
            </div>
        </div>
    );
};

export default NavMenu;
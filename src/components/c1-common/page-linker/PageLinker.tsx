import React from 'react';
import s from './PageLinker.module.scss'
import {ReactComponent as Smile} from "../../../assets/smile-sticker.svg";
import {ReactComponent as Sad} from "../../../assets/sad-sticker.svg";
import {ReactComponent as Heart} from "../../../assets/heart-sticker.svg";
type PageLinkerPropsType = {
    type: "likes" | "favourites" | "dislikes"
    activePage: string
    callback: () => void
}
const PageLinker: React.FC<PageLinkerPropsType> = ({type, activePage ,callback}) => {
    const stickerSelector = (type: "likes" | "favourites" | "dislikes") => {
        switch (type){
            case "dislikes":
                return <Sad className={s.sticker}/>
            case "favourites":
                return <Heart className={s.sticker}/>
            default:
                return <Smile className={s.sticker}/>
        }
    }
    return (
        <div className={activePage ===type ?`${s.container} ${s.active}` :s.container} onClick={callback}>
            {stickerSelector(type)}
        </div>
    );
};

export default PageLinker;
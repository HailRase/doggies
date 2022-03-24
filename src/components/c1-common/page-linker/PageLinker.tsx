import React from 'react';
import s from './PageLinker.module.scss'
import {ReactComponent as Smile} from "../../../assets/smile-sticker.svg";
import {ReactComponent as Sad} from "../../../assets/sad-sticker.svg";
import {ReactComponent as Heart} from "../../../assets/heart-sticker.svg";
type PageLinkerPropsType = {
    type: "smile" | "sad" | "heart"
    linkToCallback?: () => void
}
const PageLinker: React.FC<PageLinkerPropsType> = ({type, linkToCallback}) => {
    const stickerSelector = (type: "smile" | "sad" | "heart") => {
        switch (type){
            case "sad":
                return <Sad className={s.sticker}/>
            case "heart":
                return <Heart className={s.sticker}/>
            default:
                return <Smile className={s.sticker}/>
        }
    }
    return (
        <div className={s.container} onClick={linkToCallback}>
            {stickerSelector(type)}
        </div>
    );
};

export default PageLinker;
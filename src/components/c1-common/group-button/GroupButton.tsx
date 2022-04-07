import React from 'react';
import s from './GroupButton.module.scss'
import {ReactComponent as Smile} from '../../../assets/smile-sticker.svg'
import {ReactComponent as Sad} from '../../../assets/sad-sticker.svg'
import {ReactComponent as Heart} from '../../../assets/heart-sticker.svg'

type GroupButtonPropsType = {
    onSmile: () => void
    onHeart: () => void
    onSad: () => void
}
const GroupButton: React.FC<GroupButtonPropsType> = ({onSmile, onHeart, onSad}) => {
    return (
        <div className={s.content}>
            <div className={s.smile} onClick={onSmile}>
                <Smile className={s.img}/>
            </div>
            <div className={s.heart} >
                <Heart className={s.img} onClick={onHeart}/>
            </div>
            <div className={s.sad} onClick={onSad}>
                <Sad className={s.img}/>
            </div>
        </div>
    );
};

export default GroupButton;
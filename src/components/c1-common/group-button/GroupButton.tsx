import React from 'react';
import s from './GroupButton.module.scss'
import {ReactComponent as Smile} from '../../../assets/smile-sticker.svg'
import {ReactComponent as Sad} from '../../../assets/sad-sticker.svg'
import {ReactComponent as Heart} from '../../../assets/heart-sticker.svg'

type GroupButtonPropsType = {}
const GroupButton: React.FC<GroupButtonPropsType> = ({}) => {
    return (
        <div className={s.content}>
            <div className={s.smile}>
                <Smile className={s.img}/>
            </div>
            <div className={s.heart}>
                <Heart className={s.img}/>
            </div>
            <div className={s.sad}>
                <Sad className={s.img}/>
            </div>
        </div>
    );
};

export default GroupButton;
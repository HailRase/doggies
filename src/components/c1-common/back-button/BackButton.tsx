import React from 'react';
import s from './BackButton.module.scss'
import {ReactComponent as Back} from '../../../assets/back-button.svg'
type BackButtonPropsType = {
    callback: () => void
}
const BackButton:React.FC<BackButtonPropsType> = ({callback}) => {
    return (
        <div className={s.container} onClick={callback}>
            <Back className={s.back}/>
        </div>
    );
};

export default BackButton;
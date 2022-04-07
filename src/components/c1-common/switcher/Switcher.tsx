import React from 'react';
import s from './Switcher.module.scss'
import {ReactComponent as CloseEye} from "../../../assets/close-eyes.svg";
import {ReactComponent as OpenEye} from "../../../assets/open-eyes.svg";

type SwitcherPropsType = {
    value: boolean
    toggle: () => void
}
const Switcher:React.FC <SwitcherPropsType> = ({toggle, value}) => {
    return (
        <div className={s.switch}>
            <div className={value ? `${s.icon} ${s.active}` :s.icon}>
                {!value ? <OpenEye /> : <CloseEye/>}
            </div>
            <input type="checkbox" onChange={toggle}/>
        </div>
    );
};

export default Switcher;
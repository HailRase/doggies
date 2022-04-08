import React from 'react';
import s from './Logo.module.scss'
import {ReactComponent as Paw} from "../../../assets/logo/paw.svg";

const Logo = () => {
    return (
        <div className={s.container}>
            <Paw className={s.img}/>
            <span className={s.title}>Doggies</span>
        </div>
    );
};

export default Logo;
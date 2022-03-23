import React from 'react';
import s from './Logo.module.scss'
import paw from '../../../assets/logo/paw.webp'
const Logo = () => {
    return (
        <div className={s.container}>
            <img src={paw} alt=""/>
            <span className={s.title}>Doggies</span>
        </div>
    );
};

export default Logo;
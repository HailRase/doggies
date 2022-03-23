import React from 'react';
import s from './GirlWithPet.module.scss'
import girl from '../../../assets/content-items-picture/girl-and-pet.svg'
const GirlWithPet = () => {
    return (
        <div className={s.container}>
            <div className={s.background}>
            </div>
            <img src={girl} alt=""/>
        </div>
    );
};

export default GirlWithPet;
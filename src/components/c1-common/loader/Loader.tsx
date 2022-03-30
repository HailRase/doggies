import React from 'react';
import s from './Loader.module.scss'
import loader from '../../../assets/loading.gif'

const Loader = () => {
    return (
        <div className={s.container}>
            <img src={loader} alt=""/>
        </div>
    );
};

export default Loader;
import React from 'react';
import s from './Loader.module.scss'
import loader from '../../../assets/loading.gif'

const Loader:React.FC<{ style?: React.CSSProperties }> = ({style}) => {
    return (
        <div className={s.container} style={style}>
            <img src={loader} alt=""/>
        </div>
    );
};

export default Loader;
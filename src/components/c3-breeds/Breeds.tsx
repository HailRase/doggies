import React from 'react';
import s from './Breeds.module.scss'
import BackButton from "../c1-common/back-button/BackButton";
import {useNavigate} from "react-router-dom";
import Select from '../c1-common/select/Select';
import SortButton from "../c1-common/sort-button/SortButton";
const Breeds = () => {

    const breeds = ["All breeds","Affenpinscher","Afghan Hound","African Hunting Dog",
        "Airedale Terrier","Akbash Dog","Akita"]
    const limits = [5,10,15,20]

    let navigate = useNavigate();

    function toHome() {
        navigate("/home");
    }
    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <BackButton callback={toHome}/>
                <span>BREEDS</span>
                <Select items={breeds}/>
                <Select items={limits} title={"Limit: "}/>
                <SortButton type={'up'}/>
                <SortButton type={'down'}/>
            </div>
            {[1,2,3].map((item, index) => <div className={s.div +`${index}`}>

            </div>)}
            <div className={s.gridWrapper}>
                <div className={s.one}></div>
                <div className={s.two}></div>
                <div className={s.three}></div>
                <div className={s.four}></div>
                <div className={s.five}></div>
                <div className={s.six}></div>
                <div className={s.seven}></div>
                <div className={s.eight}></div>
                <div className={s.nine}></div>
                <div className={s.ten}></div>
                <div className={s.eleven}></div>
                <div className={s.twelve}></div>
                <div className={s.therteen}></div>
                <div className={s.fourteen}></div>
                <div className={s.fiveteen}></div>
            </div>
        </div>
    );
};

export default Breeds;
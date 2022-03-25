import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './Breeds.module.scss'
import BackButton from "../c1-common/back-button/BackButton";
import {useNavigate} from "react-router-dom";
import Select from '../c1-common/select/Select';
import SortButton from "../c1-common/sort-button/SortButton";
import {fetchBreeds, IBreed} from "../../bll/reducers/breeds-reducer";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../bll/store/store";

const Breeds = () => {

    const limits = [5, 10, 15, 20]
    const breeds = useAppSelector<IBreed[]>(state => state.breeds)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [limitBreeds, setLimitBreeds] = useState<number>(5)
    useEffect(() => {
        dispatch(fetchBreeds(0, limitBreeds, 1))
    }, [limitBreeds])
    const onChangeLimitBreeds = (e: ChangeEvent<HTMLSelectElement>) => {
        setLimitBreeds(Number(e.currentTarget.value))
    }

    function toHome() {
        navigate("/home");
    }

    const breedsName = breeds.map(breed => breed.name)
    const gridPositional = (index: number) => {
        //switch ((index + 1) % 5)
        switch (index + 1) {
            case 1:
                return s.item1M
            case 4:
                return s.item1L
            case 8:
                return s.item2M
            case 10:
                return s.item2L
            case 11:
                return s.item3M
            case 14:
                return s.item3L
            case 18:
                return s.item4M
            case 20:
                return s.item4L
            default:
                return ''
        }
    }

    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <BackButton callback={toHome}/>
                <span>BREEDS</span>
                <Select items={breedsName}/>
                <Select items={limits} title={"Limit: "} onChange={onChangeLimitBreeds}/>
                <SortButton type={'up'}/>
                <SortButton type={'down'}/>
            </div>
            <div className={s.gridWrapper}>
                {breeds.map((item, index) => <div className={gridPositional(index)}>
                    <img src={item.image.url} alt=""/>
                </div>)}
                {/*<div></div>
                <div></div>
                <div></div>*/}
                {/*<div className={s.itemM}></div>
                <div className={s.itemL}></div>*/}
            </div>
        </div>
    )
}


export default Breeds;
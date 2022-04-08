import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './Breeds.module.scss'
import BackButton from "../c1-common/back-button/BackButton";
import {useNavigate} from "react-router-dom";
import Select from '../c1-common/select/Select';
import SortButton from "../c1-common/sort-button/SortButton";
import {fetchBreeds, IBreed, setBreeds, setCurrentPage} from "../../bll/reducers/breeds-reducer";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../bll/store/store";
import {gridPositional} from "../../utils/gridPositional";
import {pagesCreator} from "../../utils/pagesCreator";
import Breed from "./breed/Breed";
import {fetchImage} from "../../bll/reducers/images-reducer";

const Breeds = () => {

    const limits = useAppSelector<number[]>(state => state.breeds.limits)
    const breeds = useAppSelector<IBreed[]>(state => state.breeds.breeds)
    const currentPage = useAppSelector<number>(state => state.breeds.currentPage)
    const totalCount = useAppSelector<number>(state => state.breeds.totalCount)
    const [limitBreeds, setLimitBreeds] = useState<number>(5)
    const [selectedBreed, setSelectedBreed] = useState<string>()
    const [sortActive, setSortActive] = useState<"up"|"down"|"none">("none")
    let pagesCount = Math.ceil(totalCount / limitBreeds)
    let pages: number[] = []
    pagesCreator(pages, pagesCount, currentPage)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBreeds(0, limitBreeds, currentPage))
    }, [limitBreeds, currentPage, dispatch])
    useEffect(() => {

    }, [selectedBreed])
    const onChangeLimitBreeds = (e: ChangeEvent<HTMLSelectElement>) => {
        setLimitBreeds(Number(e.currentTarget.value))
    }
    const onChangeBreedHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedBreed(e.currentTarget.value)
        dispatch(fetchBreeds(0, 1, 0, e.currentTarget.value))
    }
    function toHome() {
        navigate("/home");
    }

    const breedsName = breeds.map(breed => breed.name)
    const sortBreedsAscByName = () => {
        const sortBreeds = [...breeds].sort((a, b) => a.name.toLowerCase() <= b.name.toLowerCase() ? -1 : 1)
        dispatch(setBreeds(sortBreeds))
        setSortActive("up")
    }
    const sortBreedsDescByName = () => {
        const sortBreeds = [...breeds].sort((a, b) => a.name.toLowerCase() >= b.name.toLowerCase() ? -1 : 1)
        dispatch(setBreeds(sortBreeds))
        setSortActive("down")
    }
    const onPageChangeHandler = (page: number) => dispatch(setCurrentPage(page - 1))
    const toBreed = (breed_id: number) => {
        navigate(`/breeds/breed/${breed_id}`)
    }
    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <div className={s.navigate}>
                    <BackButton callback={toHome}/>
                    <span>BREEDS</span>
                </div>
                <Select items={breedsName}
                        onChange={onChangeBreedHandler}/>
                <div className={s.filters}>
                    <Select items={limits} title={"Limit: "} onChange={onChangeLimitBreeds}/>
                    <div className={s.sortBlock}>
                        <SortButton type={'up'} sortActive={sortActive} sortCallback={sortBreedsAscByName}/>
                        <SortButton type={'down'} sortActive={sortActive} sortCallback={sortBreedsDescByName}/>
                    </div>
                </div>
            </div>
            <div className={s.gridWrapper}>
                {breeds.map((item, index) => <Breed key={item.name}
                                                    toBreed={() => toBreed(item.id)}
                                                    className={gridPositional(index)}
                                                    breed={item}/>)}
            </div>
            <div className={s.paginator}>
                {!pages.find(page => page === 1) && <div className={currentPage === 0 ? s.currentPage : s.page}
                                                         onClick={() => onPageChangeHandler(1)}>
                    1
                </div>}
                {pages.map((page, index) => <div key={index}
                                                 className={currentPage === page - 1 ? s.currentPage : s.page}
                                                 onClick={() => onPageChangeHandler(page)}>
                    {page}
                </div>)}
                {!pages.find(page => page === pagesCount) &&
                    <div className={currentPage === pagesCount ? s.currentPage : s.page}
                         onClick={() => onPageChangeHandler(pagesCount)}>
                        {pagesCount}
                    </div>}
            </div>
        </div>
    )
}


export default Breeds;
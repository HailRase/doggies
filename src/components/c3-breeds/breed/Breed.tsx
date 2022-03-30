import React from 'react';
import {IBreed} from "../../../bll/reducers/breeds-reducer";
import s from './../Breeds.module.scss'

type BreedPropsType = {
    breed: IBreed
    className: string
    toBreed: () => void
}
const Breed: React.FC<BreedPropsType> = ({ breed, className, toBreed}) => {
    return (
        <div className={className}>
            <img src={breed.image?.url} alt=""/>
            <div className={s.overlay} onClick={toBreed}>
                <div className={s.breedName}>{breed.name}</div>
            </div>
        </div>
    );
};

export default Breed;
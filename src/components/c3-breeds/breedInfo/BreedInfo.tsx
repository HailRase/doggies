import React, {useEffect} from 'react';
import s from './BreedInfo.module.scss'
import {useParams} from "react-router-dom";
import {fetchImages, ImagesType} from "../../../bll/reducers/images-reducer";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../../bll/store/store";
import Loader from "../../c1-common/loader/Loader";
import Carousel from "../../c1-common/carousel/Carousel";

const BreedInfo = () => {
    const {breed_id} = useParams()
    const dispatch = useDispatch()
    const {images, status} = useAppSelector<ImagesType>(state => state.images)
    useEffect(() => {
        if (breed_id) {
            dispatch(fetchImages(breed_id, 20, 1))
        }
    }, [breed_id, dispatch])
    const breed = images[0]?.breeds[0]
    const imagesUrl = images.map( image => image.url)
    return (
        <div className={s.wrapper}>
            <div className={s.header}></div>
            <div className={s.content}>
                {status === 'loading'
                    ? <Loader/>
                    : breed && <div className={s.imageBlock}>
                        <Carousel items={imagesUrl}/>
                    </div>}
                {status === 'loading'
                    ? <Loader/>
                    : breed && <div className={s.blockInfo}>
                        <span className={s.title}>{breed.name}</span>
                        <div className={s.info}>
                            <div className={s.bredFor}>{breed.bred_for}</div>
                            <div className={s.otherInfo}>
                                <div className={s.left}>
                                    <div><span>Temperament: </span> {breed.temperament}</div>
                                </div>
                                <div className={s.right}>
                                    <div><span>Height: </span> {breed.height.metric} cm at the withers</div>
                                    <div><span>Weight :</span> {breed.weight.metric} kgs</div>
                                    <div><span>Life span: </span> {breed.life_span} years</div>
                                </div>
                            </div>
                        </div>
                    </div>}
            </div>
        </div>
    );
};

export default BreedInfo;
import React, {useEffect} from 'react';
import s from './BreedInfo.module.scss'
import {useNavigate, useParams} from "react-router-dom";
import {fetchImages, ImagesType} from "../../../bll/reducers/images-reducer";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../../bll/store/store";
import Loader from "../../c1-common/loader/Loader";
import Carousel from "../../c1-common/carousel/Carousel";
import BackButton from "../../c1-common/back-button/BackButton";

const BreedInfo = () => {
    const {breed_id} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {images, status} = useAppSelector<ImagesType>(state => state.images)
    useEffect(() => {
        if (breed_id) {
            dispatch(fetchImages(20, 1, breed_id))
        }
    }, [breed_id, dispatch])
    const breed = images[0]?.breeds[0]
    const imagesUrl = images.map(image => image.url)
    const toHome = () => {
        navigate('/home')
    }
    const toBreeds = () => {
        navigate('/breeds')
    };

    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <BackButton callback={toHome}/>
                <span onClick={toBreeds} className={s.prevPageTitle}>BREEDS</span>
                <span className={s.breedId}>{breed_id}</span>
            </div>
            {status === 'loading' ? <Loader style={{justifySelf: "center"}}/>
                : <div className={s.content}>
                    <div className={s.imageBlock}>
                        <Carousel items={imagesUrl}/>
                    </div>
                    <div className={s.blockInfo}>
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
                                    <div><span>Life span: </span> {breed.life_span}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
                </div>
                );
            };

            export default BreedInfo;
import React, {useEffect} from 'react';
import s from './Voting.module.scss'
import BackButton from "../c1-common/back-button/BackButton";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchImages, ImagesType} from "../../bll/reducers/images-reducer";
import {useAppSelector} from "../../bll/store/store";
import Loader from "../c1-common/loader/Loader";
import {sendVote} from "../../bll/reducers/votes-reducer";
import GroupButton from "../c1-common/group-button/GroupButton";

const Voting = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {images, status} = useAppSelector<ImagesType>(state => state.images)

    useEffect(() => {
        dispatch(fetchImages(1, 0))
    }, [dispatch])
    const toHome = () => {
        navigate('/home')
    }
    const imageURL = images[0]?.url
    const imageId = images[0]?.id
    return (
        <div className={s.container}>
            <div className={s.header}>
                <BackButton callback={toHome}/>
                <span>VOTING</span>
            </div>
            {status === 'loading'
                ? <Loader/>
                : <div className={s.content}>
                    <img src={imageURL} alt="" height={100} width={200}/>
                    <GroupButton/>
                </div>}
        </div>
    );
};

export default Voting;
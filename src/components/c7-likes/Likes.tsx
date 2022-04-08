import React, {useEffect} from 'react';
import s from './Likes.module.scss'
import BackButton from "../c1-common/back-button/BackButton";
import {useNavigate} from "react-router-dom";
import {useAppSelector} from "../../bll/store/store";
import {fetchVotes, VoteType} from "../../bll/reducers/votes-reducer";
import {useDispatch} from "react-redux";
import {fetchImage, IImage} from "../../bll/reducers/images-reducer";

const Likes = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const votes = useAppSelector<VoteType[]>( state => state.votes.votes.filter(v => v.value === 1))
    const images = useAppSelector<IImage[]>( state => state.images.images)
    useEffect(() => {
        dispatch(fetchVotes(30,0))
    }, [])
    /*useEffect(() => {
        votes.forEach(vote => {
            dispatch(fetchImage(vote.image_id))
        })
    }, [votes])*/

    console.log(images)
    const toHome = () => {
      navigate('/home')
    }
    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <BackButton callback={toHome}/>
                <span>LIKES</span>
            </div>
            <div className={s.gridWrapper}>

            </div>
        </div>
    );
};

export default Likes;
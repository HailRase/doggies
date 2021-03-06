import React, {useEffect, useState} from 'react';
import s from './Voting.module.scss'
import BackButton from "../c1-common/back-button/BackButton";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchImages, ImagesType} from "../../bll/reducers/images-reducer";
import {useAppSelector} from "../../bll/store/store";
import Loader from "../c1-common/loader/Loader";
import GroupButton from "../c1-common/group-button/GroupButton";
import {sendVote, VotesType, VoteType} from "../../bll/reducers/votes-reducer";
import {ReactComponent as Smile} from "../../assets/smile-sticker.svg";
import {ReactComponent as Sad} from "../../assets/sad-sticker.svg";
import {ReactComponent as Heart} from "../../assets/heart-sticker.svg";

const Voting = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const images = useAppSelector<ImagesType>(state => state.images)
    const votes = useAppSelector<VotesType>(state => state.votes)
    const [messages, setMessages] = useState<VoteType[]>()
    const imageURL = images.images[0]?.url
    const imageId = images.images[0]?.id
    useEffect(() => {
        dispatch(fetchImages(1, 0))
    }, [dispatch])
    useEffect(() => {
        setMessages(votes.votes)
    }, [votes.votes])
    const onLike = () => {
        dispatch(sendVote(imageId, true))
    }
    const onDisLike = () => {
        dispatch(sendVote(imageId, false))
    }
    const onFavorite = () => {

    }
    const toHome = () => {
        navigate('/home')
    }
    const logoGeneration = (value: number) => {
        switch (value) {
            case 0:
                return <Sad className={s.sad}/>
            case 1:
                return <Smile className={s.smile}/>
            default:
                return <Heart className={s.heart}/>
        }
    }


    return (
        <div className={s.container}>
            <div className={s.header}>
                <BackButton callback={toHome}/>
                <span>VOTING</span>
            </div>
            <div className={s.content}>
                <div className={s.voting}>
                    <div className={s.img}>
                        {images.status === 'loading'
                            ? <Loader style={{width: "30%", height: "30%"}}/>
                            : <img src={imageURL} alt=""/>}
                    </div>
                    <GroupButton onSmile={onLike} onHeart={onFavorite} onSad={onDisLike}/>
                </div>
                <div className={s.logMessage}>
                    {messages?.map(message => <div key={message.image_id} className={s.message}>
                        <div className={s.date}>
                            <span>{new Date(message.created_at).toLocaleTimeString().slice(0, -3)}</span>
                        </div>
                        <div className={s.text}>
                            Image ID:
                            <span> {message.image_id} </span>
                            was added
                            to {message.value === 0 ? "Dislikes" : "Likes"}
                        </div>
                        <div className={s.logo}>
                            {logoGeneration(message.value)}
                        </div>
                    </div>).reverse()}
                </div>
            </div>
        </div>
    );
};

export default Voting;
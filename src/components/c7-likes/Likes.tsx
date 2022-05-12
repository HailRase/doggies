import React, {useContext, useEffect, useState} from 'react';
import s from './Likes.module.scss'
import BackButton from "../c1-common/back-button/BackButton";
import {useNavigate} from "react-router-dom";
import {useAppSelector} from "../../bll/store/store";
import {fetchVotes, VoteType} from "../../bll/reducers/votes-reducer";
import {useDispatch} from "react-redux";
import {fetchImage, IImage, setImages} from "../../bll/reducers/images-reducer";
import Paginator from "../c1-common/paginator/Paginator";
import {pagesCreator} from "../../utils/pagesCreator";
import {arrayDivisor} from "../../utils/arrayDivisor";
import {LanguageContext} from "../../index";

const Likes = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const lib = {
        'ru': "ЛАЙКИ",
        'en': "LIKES"
    }

    const language = useContext(LanguageContext);

    const votes = useAppSelector<VoteType[]>(state => state.votes.votes)
    const images = useAppSelector<IImage[]>(state => state.images.images)

    const [currentPage, setCurrentPage] = useState<number>(0)

    const likeVotes = votes.filter(vote => vote.value === 1)
    const totalCount = likeVotes.length
    const limitCount = 20
    let pagesCount = Math.ceil(totalCount / limitCount)
    let pages: number[] = []
    pagesCreator(pages, pagesCount, currentPage)
    const votesForRender = arrayDivisor(limitCount, likeVotes)

    useEffect(() => {
        dispatch(setImages([]))
        dispatch(fetchVotes())
    }, [])

    useEffect(() => {
        if (votesForRender) {
            console.log(votesForRender)
            dispatch(setImages([]))
            votesForRender[currentPage]?.forEach((vote: VoteType) => {
                dispatch(fetchImage(vote.image_id))
            })
        }
    }, [votes, currentPage])

    console.log('likes render')
    console.log(language)

    const onPageChangeHandler = (page: number) => setCurrentPage(page - 1)

    const toHome = () => {
        navigate('/home')
    }

    const gridPositional = (index: number) => {
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

    const imagesElements = images.map((image, index) => (
        <div key={index + image.id} className={gridPositional(index)}>
            <img src={image.url}/>
        </div>))


    return (
        <div className={s.wrapper}>

            <div className={s.header}>
                <BackButton callback={toHome}/>
                {/*// @ts-ignore*/}
                <span>{lib[language]}</span>
            </div>

            <div className={s.gridWrapper}>
                {imagesElements}
            </div>

            <Paginator pages={pages}
                       currentPage={currentPage}
                       pagesCount={pagesCount}
                       onPageChangeHandler={onPageChangeHandler}/>

        </div>
    );
};

export default Likes;
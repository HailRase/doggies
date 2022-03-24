import React from 'react';
import ContentItem from './content-item/ContentItem';
import s from './Greeting.module.scss'
import voting from '../../assets/content-items-picture/vote.svg'
import breeds from '../../assets/content-items-picture/breeds.svg'
import gallery from '../../assets/content-items-picture/gallery.svg'
import Logo from "../c1-common/logo/Logo";
import {useNavigate} from "react-router-dom";

const Greeting = () => {
    const navigate = useNavigate()
    const toBreeds = () => {
        navigate('/breeds')
    }
    return (
        <div className={s.container}>
            <Logo/>
            <div className={s.greeting}>
                <h4>Hi, there!</h4>
                <span>Welcome to doggies web-application</span>
            </div>
            <div className={s.itemsContainer}>
                <h4>Lets start using The Dogs API</h4>
                <div className={s.items}>
                    <ContentItem name={"VOTING"} background={"purple"} urlImg={voting}/>
                    <ContentItem name={"BREEDS"} background={"green"} urlImg={breeds} callback={toBreeds}/>
                    <ContentItem name={"GALLERY"} background={"orange"} urlImg={gallery}/>
                </div>
            </div>
        </div>
    );
};

export default Greeting;
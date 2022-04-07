import React from 'react';
import ContentItem from './content-item/ContentItem';
import s from './Greeting.module.scss'
import voting from '../../assets/content-items-picture/vote.svg'
import breeds from '../../assets/content-items-picture/breeds.svg'
import gallery from '../../assets/content-items-picture/gallery.svg'
import Logo from "../c1-common/logo/Logo";
import {useNavigate} from "react-router-dom";
import Switcher from "../c1-common/switcher/Switcher";


type GreetingPropsType = {
    value: boolean
    toggle: () => void
}
const Greeting: React.FC <GreetingPropsType> = ({toggle, value}) => {
    const navigate = useNavigate()
    const toBreeds = () => {
        navigate('/breeds')
    }
    const toVoting = () => {
        navigate('/voting')
    }
    return (
        <div className={s.container}>
            <div className={s.header}>
                <Logo/>
                 <Switcher toggle={toggle} value={value}/>
            </div>
            <div className={s.greeting}>
                <h4>Hi, there!</h4>
                <span>Welcome to doggies web-application</span>
            </div>
            <div className={s.itemsContainer}>
                <h4>Lets start using The Dogs API</h4>
                <div className={s.items}>
                    <ContentItem name={"VOTING"} background={"purple"} urlImg={voting} callback={toVoting}/>
                    <ContentItem name={"BREEDS"} background={"green"} urlImg={breeds} callback={toBreeds}/>
                    <ContentItem name={"GALLERY"} background={"orange"} urlImg={gallery}/>
                </div>
            </div>
        </div>
    );
};

export default Greeting;
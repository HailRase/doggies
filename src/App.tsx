import React from 'react';
import s from './App.module.scss';
import Greeting from "./components/c2-greeting/Greeting";
import GirlWithPet from "./components/c2-greeting/girl-with-pet/GirlWithPet";

const App = () => {
    return (
        <div className={s.appContainer}>
            <div className={s.greeting}>
                <Greeting/>
            </div>
            <div className={s.content}>
                <GirlWithPet/>
            </div>
        </div>
    )
};

export default App;

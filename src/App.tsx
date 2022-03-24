import React from 'react';
import s from './App.module.scss';
import Greeting from "./components/c2-greeting/Greeting";
import GirlWithPet from "./components/c2-greeting/girl-with-pet/GirlWithPet";
import {Routes, Route, Navigate, useLocation} from 'react-router-dom'
import Breeds from "./components/c3-breeds/Breeds";
import Header from "./components/c4-header/Header";

const App = () => {
    const location = useLocation()
    return (
        <div className={s.appContainer}>
            <div className={s.greeting}>
                <Greeting/>
            </div>
            <div className={s.content}>
                {location.pathname !== '/home' && <Header/>}
                <Routes>
                    <Route path='/' element={<Navigate to={"/home"}/>}/>
                    <Route path={'/home'} element={<GirlWithPet/>}/>
                    <Route path={'/breeds'} element={<Breeds/>}/>
                </Routes>
            </div>
        </div>
    )
};

export default App;

import React, {useState} from 'react';
import s from './App.module.scss';
import Greeting from "./components/c2-greeting/Greeting";
import GirlWithPet from "./components/c2-greeting/girl-with-pet/GirlWithPet";
import {Navigate, Route, Routes, useLocation} from 'react-router-dom'
import Breeds from "./components/c3-breeds/Breeds";
import Header from "./components/c4-header/Header";
import NavMenu from "./components/c5-navmenu/NavMenu";

const App = () => {
    const [showNav, setShowNav] = useState<boolean>(false)
    const location = useLocation()
    const onShowNavHandler = () => {
      setShowNav(!showNav)
    }
    return (
        <div className={s.appContainer}>
            <div className={s.greeting}>
                <Greeting/>
            </div>
            <div className={s.content}>
                {showNav && <NavMenu active={showNav} onNavActive={onShowNavHandler}/>}
                {location.pathname !== '/home' && <Header onNavActive={onShowNavHandler} />}
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

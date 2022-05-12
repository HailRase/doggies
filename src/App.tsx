import React, {useEffect, useState} from 'react';
import './App.scss';
import Greeting from "./components/c2-greeting/Greeting";
import GirlWithPet from "./components/c2-greeting/girl-with-pet/GirlWithPet";
import {Navigate, Route, Routes, useLocation} from 'react-router-dom'
import Breeds from "./components/c3-breeds/Breeds";
import Header from "./components/c4-header/Header";
import NavMenu from "./components/c5-navmenu/NavMenu";
import useWindowWidth from "react-hook-use-window-width";
import BreedInfo from "./components/c3-breeds/breedInfo/BreedInfo";
import Voting from './components/c6-voting/Voting';
import Likes from "./components/c7-likes/Likes";


const App = () => {
    const [showNav, setShowNav] = useState<boolean>(false)
    const [darkTheme, setDarkTheme] = useState<boolean>(false)

    useEffect(() => {
         setDarkTheme(JSON.parse(localStorage.getItem('darkTheme') as string))
    }, [])

    useEffect(() => {
        localStorage.setItem('darkTheme',  JSON.stringify(darkTheme))
    },[darkTheme])

    const windowWidth = useWindowWidth()
    const location = useLocation()

    const onToggleDarkTheme = () => {
        setDarkTheme(!darkTheme)
    }

    const onShowNavHandler = () => {
      setShowNav(!showNav)
    }

    console.log('render')

    return (
        <div className={darkTheme ? `appContainer themeDark` :`appContainer themeWhite`}>
            <div className={'greeting'}>
                <Greeting toggle={onToggleDarkTheme} value={darkTheme}/>
            </div>
            <div className={'content'}>
                {showNav && <NavMenu active={showNav} onNavActive={onShowNavHandler}/>}
                {location.pathname !== '/home' && <Header onNavActive={onShowNavHandler} />}
                <Routes>
                    <Route path='/' element={<Navigate to={"/home"}/>}/>
                    <Route path={'/home'} element={(windowWidth > 768) ? <GirlWithPet/> : <Greeting toggle={onToggleDarkTheme}
                                                                                                   value={darkTheme}/>}/>
                    <Route path={'/breeds'} element={<Breeds/>}/>
                    <Route path={'/breeds/breed/:breed_id'} element={<BreedInfo/>}/>
                    <Route path={'/voting'} element={<Voting/>}/>
                    <Route path={'/likes'} element={<Likes/>}/>
                </Routes>
            </div>
        </div>
    )
};

export default App;

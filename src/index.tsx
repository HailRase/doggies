import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./bll/store/store";
import {Provider} from 'react-redux';
import {HashRouter} from "react-router-dom";

export const LanguageContext = createContext('ru');

ReactDOM.render(
        <Provider store={store}>
            <HashRouter>
                <LanguageContext.Provider value={'en'}>
                <App/>
                </LanguageContext.Provider>
            </HashRouter>
        </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import { TypedUseSelectorHook, useSelector } from "react-redux";
import {applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk'
import {imagesReducer} from "../reducers/images-reducer";
import {breedsReducer} from "../reducers/breeds-reducer";

const rootReducer = combineReducers({
    images: imagesReducer,
    breeds: breedsReducer
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export default store

export type StoreType = ReturnType<typeof rootReducer>
export const useAppSelector: TypedUseSelectorHook<StoreType> = useSelector


// @ts-ignore
window.store = store
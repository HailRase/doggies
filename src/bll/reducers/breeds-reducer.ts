import {ThunkAction} from "redux-thunk";
import {StoreType} from "../store/store";
import {breedsAPI} from "../../dal/api/breeds";

export type BreedsHeightType = {
    imperial: string
    metric: string
}
export type BreedsWeightType = {
    imperial: string
    metric: string
}
export type BreedsImageType = {
    height: number
    id: string
    url: string
    width: number
}

export interface IBreed {
    bred_for: string
    breed_group: string,
    country_code: string
    height: BreedsHeightType
    id: number
    image: BreedsImageType
    life_span: string
    name: string
    origin: string
    reference_image_id: string
    temperament: string
    weight: BreedsWeightType
}

export type BreedsType = {
    breeds: IBreed[]
    limits: number[]
    currentPage: number
    totalCount: number
}

const initialState: BreedsType = {
    breeds: [],
    limits: [5, 10, 15, 20],
    currentPage: 0,
    totalCount: 172
}

//reducer
export const breedsReducer = (state: BreedsType = initialState, action: BreedsAction) => {
    switch (action.type) {
        case "BREEDS/SET_BREEDS":
            return {
                ...state,
                breeds: [...action.breeds]
            }
        case "BREEDS/SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.currentPage
            }
        default:
            return state
    }
}

//actions & types
export const setBreeds = (breeds: IBreed[]) => ({type: 'BREEDS/SET_BREEDS', breeds} as const)
type setBreedsT = ReturnType<typeof setBreeds>
export const setCurrentPage = (currentPage: number) => ({type: 'BREEDS/SET_CURRENT_PAGE', currentPage} as const)
type setCurrentPageT = ReturnType<typeof setCurrentPage>

// common action type
export type BreedsAction = setBreedsT | setCurrentPageT

//thunk
export const fetchBreeds = (attach_breed: number, limit: number, page: number, query?: string): BreedsThunkAction => {
    return async (dispatch) => {
        try {
            if (!query){
                const breeds = (await breedsAPI.getBreeds(attach_breed, limit, page)).data
                dispatch(setBreeds(breeds))
            }else{
                const breeds = (await breedsAPI.searchBreeds(query)).data
                dispatch(setBreeds(breeds))
            }
        } catch (e) {
        }
    }
}
//ThunkActionType
type BreedsThunkAction = ThunkAction<void,
    StoreType,
    void,
    BreedsAction>;
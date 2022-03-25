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

const initialState: IBreed[] = [
    {
        bred_for: "Coursing and hunting",
        breed_group: "Hound",
        country_code: "AG",
        height: {
            imperial: "25 - 27",
            metric: "64 - 69"
        },
        id: 2,
        image: {
            height: 380,
            id: "hMyT4CDXR",
            url: "https://cdn2.thedogapi.com/images/hMyT4CDXR.jpg",
            width: 606
        },
        life_span: "10 - 13 years",
        name: "Afghan Hound",
        origin: "Afghanistan, Iran, Pakistan",
        reference_image_id: "hMyT4CDXR",
        temperament: "Aloof, Clownish, Dignified, Independent, Happy",
        weight: {
            imperial: "50 - 60",
            metric: "23 - 27"
        }
    }
]


//reducer
export const breedsReducer = (state = initialState, action: BreedsAction) => {
    switch (action.type) {
        case "BREEDS/SET_BREEDS":
            return [
                ...action.breeds
            ]
        default:
            return state
    }
}

//actions & types
export const setBreeds = (breeds: IBreed[]) => ({type: 'BREEDS/SET_BREEDS', breeds} as const)
type setBreedsT = ReturnType<typeof setBreeds>


// common action type
export type BreedsAction = setBreedsT

//thunk
export const fetchBreeds = (attach_breed: number, limit: number, page: number): BreedsThunkAction => {
    return async (dispatch) => {
        try {
            const breeds = (await breedsAPI.getBreeds(attach_breed, limit, page)).data
            dispatch(setBreeds(breeds))
            console.log(breeds)
        } catch (e) {
        }
    }
}
//ThunkActionType
type BreedsThunkAction = ThunkAction<void,
    StoreType,
    void,
    BreedsAction>;
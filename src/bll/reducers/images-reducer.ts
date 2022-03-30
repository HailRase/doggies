import {ThunkAction} from "redux-thunk";
import {imagesAPI} from "../../dal/api/images";
import {StoreType} from "../store/store";
import {IBreed} from "./breeds-reducer";

export interface IImage {
    breeds: Array<Omit<IBreed, "image">>
    height: number
    id: string
    url: string
    width: number
}

export type ImagesType = {
    images: IImage[]
    status: "loading" | "loaded"
}
const initialState: ImagesType = {
    images: [],
    status: "loading"
};


//reducer
export const imagesReducer = (state = initialState, action: ImagesAction) => {
    switch (action.type) {
        case "IMAGES/SET_IMAGES":
            return { images: [...action.images]}
        case 'IMAGES/SET_IMAGE':
            return {
                ...state,
                images: [...state.images, action.image]
            }
        case "IMAGES/SET_IMAGES_STATUS":
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

//actions & types
export const setImages = (images: IImage[]) => ({type: 'IMAGES/SET_IMAGES', images} as const)
type setImagesT = ReturnType<typeof setImages>
export const setImage = (image: IImage) => ({type: 'IMAGES/SET_IMAGE', image} as const)
type setImageT = ReturnType<typeof setImage>
export const setImagesStatus = (status: "loading" | "loaded") => ({type: 'IMAGES/SET_IMAGES_STATUS', status} as const)
type setImagesStatusT = ReturnType<typeof setImagesStatus>

// common action type
export type ImagesAction = setImagesT | setImageT | setImagesStatusT

//thunk
export const fetchImages = (breed_id: string, limit: number, page: number): ImageThunkAction => {
    return async (dispatch) => {
        dispatch(setImagesStatus("loading"))
        try {
            const images = (await imagesAPI.getAllImages(breed_id, limit, page)).data
            dispatch(setImages(images))
            dispatch(setImagesStatus("loaded"))
            console.log(images)
        } catch (e) {
        }
    }
}
export const fetchImage = (image_id: string): ImageThunkAction => {
    return async (dispatch) => {
        try {
            const image = (await imagesAPI.getImage(image_id)).data
            dispatch(setImages(image))
        } catch (e) {
        }
    }
}
//ThunkActionType
type ImageThunkAction = ThunkAction<void,
    StoreType,
    void,
    ImagesAction>;
import {ThunkAction} from "redux-thunk";
import {imageAPI} from "../../dal/api/image";
import {StoreType} from "../store/store";

export interface IImage {
    id: string
    url: string
    height:number
    width:number
    breeds: object[]
}

const initialState: IImage = {
    id: "",
    url: "",
    height: 0,
    width: 0,
    breeds: []
};


//reducer
export const imageReducer = (state = initialState, action: ImageAction) => {
    switch (action.type) {
        case "IMAGE/SET_IMAGE":
            return {
                 ...action.image
            }
        default:
            return state
    }
}

//actions & types
export const setImage = (image: IImage) => ({type: 'IMAGE/SET_IMAGE', image} as const)
type setImageT = ReturnType<typeof setImage>


// common action type
export type ImageAction = setImageT

//thunk
export const fetchImage = (): ImageThunkAction => {
    return async (dispatch) => {
        try {
            const image = (await imageAPI.getImage()).data
            dispatch(setImage(image))
        } catch (e) {
        }
    }
}
//ThunkActionType
type ImageThunkAction = ThunkAction<void,
    StoreType,
    void,
    ImageAction>;
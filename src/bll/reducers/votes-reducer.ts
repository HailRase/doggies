import {votesAPI} from "../../dal/api/votes";
import {ThunkAction} from "redux-thunk";
import {StoreType} from "../store/store";
import {fetchImages} from "./images-reducer";

export type VoteType = {
    value: number
    image_id: string
    sub_id: string
    created_at: string
    id: string
    country_code: string
}
export type VotesType = {
    votes: VoteType[]
    status: "loading" | "loaded"
}
const initialState: VotesType = {
    votes: [],
    status: "loading"
};
export const votesReducer = (state = initialState, action: VotesActionType) => {
    switch (action.type) {
        case "VOTES/SET_VOTES":
            return {
                ...state,
                votes: action.votes
            }
        case "VOTES/SET_VOTE":
            return {
                ...state,
                votes: [...state.votes, action.vote]
            }
        case "VOTES/SET_VOTES_STATUS":
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

export const setVotes = (votes: VoteType[]) => ({type: 'VOTES/SET_VOTES', votes} as const)
type setVotesT = ReturnType<typeof setVotes>
export const setVote = (vote: VoteType) => ({type: 'VOTES/SET_VOTE', vote} as const)
type setVoteT = ReturnType<typeof setVote>
export const setVotesStatus = (status: "loading" | "loaded") => ({type: 'VOTES/SET_VOTES_STATUS', status} as const)
type setVotesStatusT = ReturnType<typeof setVotesStatus>
export type VotesActionType = setVotesT | setVoteT | setVotesStatusT

export const fetchVotes = (limit?: number, page?: number): VotesThunkAction => {
    return async (dispatch) => {
        dispatch(setVotesStatus("loading"))
        try {
            const votes = (await votesAPI.getVotes(limit, page)).data
            dispatch(setVotes(votes))
            dispatch(setVotesStatus("loaded"))
        } catch (e) {
        }
    }
}
export const fetchVote = (vote_id: string): VotesThunkAction => {
    return async (dispatch) => {
        dispatch(setVotesStatus("loading"))
        try {
            const vote = (await votesAPI.getVote(vote_id)).data
            dispatch(setVote(vote))
            dispatch(setVotesStatus("loaded"))
        } catch (e) {
        }
    }
}
export const sendVote = (image_id: string, value: boolean): VotesThunkAction => {
    return async (dispatch) => {
        dispatch(setVotesStatus("loading"))
        try {
            dispatch(fetchImages(1,0))
            const vote_id = (await votesAPI.createVote(image_id, value)).data.id
            dispatch(setVotesStatus("loaded"))
            dispatch(fetchVote(vote_id))
        } catch (e) {
        }
    }
}


type VotesThunkAction = ThunkAction<void,
    StoreType,
    void,
    VotesActionType>;
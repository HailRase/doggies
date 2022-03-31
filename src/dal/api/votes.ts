import {instance} from "../instance/instance";

const ENDPOINT = '/votes'
const sub_id = 'HailRase'
export const votesAPI = {
    getVotes(limit: number = 5, page: number = 0){
        return instance.get<VoteResponseType[]>(ENDPOINT+ `?limit=${limit}&page=${page}&sub_id=${sub_id}` )
    },
    createVote(image_id: string, value: boolean){
        return instance.post(ENDPOINT, {image_id, sub_id, value})
    },
    getVote(vote_id: string) {
        return instance.get<VoteResponseType>(ENDPOINT + `/${vote_id}`)
    },
    deleteVote(vote_id: string){
        return instance.delete(ENDPOINT + `/${vote_id}`)
    }
}

export interface VoteResponseType {
    value: number
    image_id: string
    sub_id: string
    created_at: string
    id: string
    country_code: string
}
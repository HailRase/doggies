import {instance} from "../instance/instance";

const ENDPOINT = '/breeds'

export const breedsAPI = {
    getBreeds(attach_breed: number = 0, limit: number = 5, page: number = 1) {
        /*let params = '?'
        if (attach_breed){
            params += `attach_breed=${attach_breed}`
        }
        if (limit && params.length === 1){
            params += `limit=${limit}`
        }else if (limit){
            params += `&limit=${limit}`
        }
        if (page && params.length === 1){
            params += `page=${page}`
        }else if (page){
            params += `&page=${page}`
        }*/
        return instance.get(ENDPOINT + `?attach_breed=${attach_breed}&limit=${limit}&page=${page}`)
    }
}
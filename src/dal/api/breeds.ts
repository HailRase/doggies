import {instance} from "../instance/instance";

const ENDPOINT = '/breeds'

export const breedsAPI = {
    getBreeds(attach_breed: number = 0, limit: number = 5, page: number = 1) {
        return instance.get(ENDPOINT + `?attach_breed=${attach_breed}&limit=${limit}&page=${page}`)
    },
    searchBreeds(query: string) {
        return instance.get(ENDPOINT + `/search?q=${query}`)
    }
}
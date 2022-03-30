import {instance} from "../instance/instance";

const ENDPOINT = '/images'

export const imagesAPI = {
    getAllImages(breed_id: string, limit: number, page: number){
        return instance.get(ENDPOINT + `/search?breed_id=${breed_id}&limit=${limit}&page=${page}`)
    },
    getImage(image_id: string = "lGy5M4Ps2") {
        return instance.get(ENDPOINT + image_id)
    }
}
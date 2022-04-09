import {instance} from "../instance/instance";

const ENDPOINT = '/images'

export const imagesAPI = {
    getAllImages(limit: number, page: number, breed_id?: string){
        let path = ''
        if (breed_id){
            path = `/search?breed_id=${breed_id}&limit=${limit}&page=${page}`
        }else {
            path = `/search?limit=${limit}&page=${page}`
        }
        return instance.get(ENDPOINT + path)
    },
    getImage(image_id: string) {
        return instance.get(ENDPOINT + `/${image_id}`)
    }
}

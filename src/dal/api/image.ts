import {instance} from "../instance/instance";

const ENDPOINT = '/images'

export const imageAPI = {
    getImage(image_id: string = "lGy5M4Ps2") {
        return instance.get(ENDPOINT + image_id)
    }
}
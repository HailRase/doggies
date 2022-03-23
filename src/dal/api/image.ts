import {instance} from "../instance/instance";
import axios from "axios";

//const ENDPOINT = '/images'

export const imageAPI = {
    getImage(image_id: string = "lGy5M4Ps2") {
        return instance.get('images/' + image_id)
    }
}
import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://api.thedogapi.com/v1/',
    headers: {
        "X-Api-Key": "4f77baf7-dcb5-4e23-b640-0ab0f72ea61c"
    }
})
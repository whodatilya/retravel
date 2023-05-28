import axios from "axios";
import {BASE_URL} from "@/api/urls";
import {API_TOKEN} from "@/api/consts";

export default {
    async findPlace(search) {
        const token = API_TOKEN
        return axios({
            method: 'GET',
            url: `https://api.opentripmap.com/0.1/ru/places/geoname?name=${search}&apikey=${token}`
        }).then(response => {
            return response.data
        })
            .catch(e => {
                console.error('Ошибка', e)
            })
    }
}
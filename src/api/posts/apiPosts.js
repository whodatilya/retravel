import axios from "axios";
import {BASE_URL} from "@/api/urls";
import store from "@/store";

export default {
    async createNewPost (postData) {
        // Не работает адекватно, нет времени разбираться почему(
        // const token = store.state.user.token
        const token = localStorage.getItem('token')
        return axios({
            method: 'POST',
            url: `${BASE_URL}/api/posts/new_post`,
            data: postData,
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .catch(e => {
                console.error('Ошибка', e)
            })
    },
    async getAllPosts () {
        // const token = store.state.user.token
        const token = localStorage.getItem('token')
        return axios({
            method: 'get',
            url: `${BASE_URL}/api/posts/get_by_user/`,
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then(response => {
                return response.data
            })
            .catch(e => {
                console.error('Ошибка', e)
            })
    }
}
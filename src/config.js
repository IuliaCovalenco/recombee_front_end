import axios from 'axios'

export const axiosInstance = axios.create ( {
    baseUrl = "https://pressclubnode.herokuapp.com/api/"
})
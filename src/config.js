import axios from 'axios'

export const axiosInstance = axios.create ( {
    baseURL: "http://159.89.0.121/api/"
})
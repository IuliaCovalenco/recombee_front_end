import axios from 'axios'

export const axiosInstance = axios.create ( {
    baseURL: "https://159.89.0.121/api/"
})
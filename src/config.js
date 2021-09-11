import axios from 'axios'

export const axiosInstance = axios.create ( {
    baseURL: "https://pressclubnode.herokuapp.com/api/"

})
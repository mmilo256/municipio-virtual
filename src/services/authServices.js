import axios from "axios"
import { API_URL } from "../constants/constants"

export const getAccessToken = async () => {
    try {
        const response = await axios.get(`${API_URL}/login`, {withCredentials: true})
        const data = response.data
        return data
    } catch (error) {
        console.log(error.message)
    }
}
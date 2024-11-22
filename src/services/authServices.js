import axios from "axios"
// import { API_URL } from "../constants/constants"

export const getUserInfo = async () => {
    try {
        const response = await axios.get(`https://municipio-virtual.onrender.com/user-info/`, { withCredentials: true })
        return response.data
    } catch (error) {
        console.log(error)
    }
}
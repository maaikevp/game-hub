import axios from "axios";


const apiClient = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '05b1c0e8328d4fd6b7d754f5f6135bb8'
    }
})

export default apiClient

// https://api.rawg.io/api/games?key=05b1c0e8328d4fd6b7d754f5f6135bb8
import axios from "axios";

export default axios.create({
    params: {
        baseURL: 'https://api.rawg.io/api',
        key: '05b1c0e8328d4fd6b7d754f5f6135bb8'
    }
})

// https://api.rawg.io/api/games?key=05b1c0e8328d4fd6b7d754f5f6135bb8
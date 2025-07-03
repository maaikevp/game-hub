import axios from "axios";
import { defineConfig, loadEnv } from 'vite';


const apiClient = axios.create({
    baseURL: 'https://api.rawg.io/api',
    withCredentials: false,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    params: {
        key: import.meta.env.VITE_API_KEY
    }
})


export default apiClient
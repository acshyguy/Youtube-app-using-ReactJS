import axios from "axios"

const API_KEY = process.env.API_KEY || "AIzaSyB5XyhF8ux0dzNGw7TeN_PTBaRsJu7IF38";

export const youtube = axios.create({
    baseURL: ' https://www.googleapis.com/youtube/v3',
    params: {
        key: API_KEY,
    }
})

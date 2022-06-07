import axios, { AxiosInstance } from "axios";

const BASE_URL = `http://localhost:3030/`



const API = axios.create({
    baseURL: BASE_URL,
});

API.interceptors.request.use(
    (config: any) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error: any) => {
        Promise.reject(error);
        localStorage.removeItem("token");
        window.location.href = "/login";
    }
);




export default API;
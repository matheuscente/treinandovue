import axios from "axios";

//instancia de requisição do axios, configura url padrão, timeout de requisição e headers padrão
const http = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default http
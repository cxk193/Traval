import axios from 'axios'

export default function  request(config) {
    const instance = axios.create({
        baseURL:'http://localhost:8080/',
        timeout:3000
    })

    instance.interceptors.request.use(config=>{
        return config
    })
    instance.interceptors.response.use(config=>{
        return config
    })

    return instance(config)
}
import request from "./instance";

export function getAddress() {
    return request({
        url:'/public/city.json'
    })
}
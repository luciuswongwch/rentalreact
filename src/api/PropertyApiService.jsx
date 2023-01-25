import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8000'
})

export function getPropertiesHomePage() {
    return apiClient.get(`/properties/home_page`);
}
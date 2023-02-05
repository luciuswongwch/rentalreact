import { apiClient } from "./ApiClient";

export function executeBasicAuthentication(token) {
    return apiClient.get(`/auth/basicauth`, {
        headers: {
            Authorization: token
        }
    })
}

// export function executeJwtAuthentication(username, password) {
//     return apiClient.post(`/auth/jwtauth`, {username, password});
// }

export function executeJwtAuthentication(username, password) {
    return apiClient.post(`/auth/authenticate`, {username, password});
}
import { useState, createContext, useContext } from "react";
import { apiClient } from "../api/ApiClient";
import basicAuthentication from "../api/AuthenticationApiService";


const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);


export function AuthProvider({ children }) {
    const [authenticated, setAuthenticated] = useState(false);
    const [username, setUsername] = useState(null);
    const [token, setToken] = useState(null);

    async function login(username, password) {
        const baToken = 'Basic ' + window.btoa(username + ":" + password);
        try {
            const response = await basicAuthentication(baToken);
            if (response.status == 200) {
                setAuthenticated(true);
                setUsername(username);
                setToken(baToken);
                apiClient.interceptors.request.use(
                    (config) => {
                        config.headers.Authorization = baToken;
                        return config;
                    }
                )
                return true;
            }
        } catch (error) {
            // console.log(error);
        }
        return false;
    }

    function logout() {
        setAuthenticated(false);
        setUsername(null);
        setToken(null);
        apiClient.interceptors.request.use(
            (config) => {
                config.headers.Authorization = null;
                return config;
            }
        )
    }

    return (
        <AuthContext.Provider value={ {authenticated, login, logout, username, token} } >
            { children }
        </AuthContext.Provider>
    )
}
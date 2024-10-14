import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('accessToken') || sessionStorage.getItem('accessToken');
        if (token) {
            axios.get(`${import.meta.env.VITE_APP_API_URL}/user/profile`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(response => {
                setUser(response.data);
            })
            . catch (()=>{
                setUser(null)
            })
            .finally (() => {
                setLoading(false);
            });
        } else {
            setLoading(false);
        }  
    }, []);

    
    
    const login = async (email, password, rememberMe) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_APP_API_URL}/user/signin`, { email, password, rememberMe });
            const accessToken = response.data.accessToken;
            const refreshToken = response.data.refreshToken;

            if(rememberMe) {
                localStorage.setItem('accessToekn', accessToken);
                localStorage.setItem('refreshToekn', refreshToken);
            }else{
                sessionStorage.setItem('accessToekn', accessToken);
                sessionStorage.setItem('refreshToekn', refreshToken);
            };

            setUser(response.data.user);
        } catch (error) {
            throw new Error("Invalid credentials");
        }
    };

    const logout = () => {
        localStorage.removeItem('accessToken');
        sessionStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToekn');
        sessionStorage.removeItem('refreshToekn');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            { children }
        </AuthContext.Provider>
    )
}
import { createContext, useContext } from "react";
import { useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

//   const token = localStorage.getItem('token');
//   const user = JSON.parse(localStorage.getItem('user'));

    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

    const login = (newToken, newUser) => {
        localStorage.setItem('token', newToken);
        localStorage.setItem('user', JSON.stringify(newUser));
        setToken(newToken);
        setUser(newUser);
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setToken(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ token, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );

}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    return useContext(AuthContext);
};

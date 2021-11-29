import React, { useCallback, useEffect, useState, useMemo } from "react"
import LoginService from "./LoginService";
import VerifyTokenService from "./VerifyTokenService";

const Context = React.createContext();

const TOKEN_KEY = "token";

export const ContextProject =  (props) => {
    const [token, setToken] = useState(undefined);
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        const verifyCurrentToken = async () => {
            const tokenLS = localStorage.getItem(TOKEN_KEY);
            
            if(tokenLS) {
                const { username, role } = await VerifyTokenService(tokenLS);

                if(username && role) {
                    setUser({ username, role });
                    setTokenAll(tokenLS);
                }
            }
        }
        verifyCurrentToken();
    }, [token])
    
    const setTokenAll = t => {
        localStorage.setItem(TOKEN_KEY, t);
        setToken(t);
    }

    const login = useCallback((username, password) => {
        const loginAsync = async () => {
            let status = false;

            try {
                const { token: tokenResponse } = await LoginService(username, password);

                if(tokenResponse) {
                    setTokenAll(tokenResponse);
                    status = true;
                }
            }
            catch (error) {
                console.log(error);
                console.log("No se pudo iniciar sesión");
            }
            finally {
                return status;
            }
        }

        return loginAsync();
    }, [])

    const logout = useCallback(() => {
        setUser(undefined);
        setTokenAll(undefined);
    }, [])

    const value = useMemo(() => ({
        token: token,
        user: user,
        login: login,
        logout: logout
    }), [token, user, login, logout]);

    return <Context.Provider value = { value } {...props} />
}

export const UseContext = () => {
    const context = React.useContext(Context);

    if(!context) {
        throw new Error("Ha ocurrido un error");
    }
    return context;
}
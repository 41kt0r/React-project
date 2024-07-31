import { useContext } from "react";

import { login, register } from "../api/auth-api"
import { AuthContext } from "../contexts/AuthContext";

export const useLogin = () => {
    const { changeAuthState } = useContext(AuthContext)

    const loginHandler = async (email, password) => {
        const { password: _, ...authData} = await login(email, password);
        
        changeAuthState(authData);
        return authData;
    }
    return loginHandler;
};

export const useRegister = () => {
    const { changeAuthState } = useContext(AuthContext);

    const registerHandler = async (email, password) => {
        //Показва паролата в state: да се измисли начин да не го прави!
        const { password: _, ...authData} = await register(email, password);

        changeAuthState(authData);
        return authData; 
        // До тук
    };  

    return registerHandler;

};
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
    token: '',
    user: {},
    isAuthenticated: false,
    saveToken: (data) => {},
    logout: () => {}
})

export const useAuth = () => useContext(AuthContext);

function AuthContextProvider({children}) {
    const [authToken, setAuthToken] = useState();
    const [userLogged, setUserLogged] = useState();

    function saveToken(data) {
        setUserLogged(data.user);
        setAuthToken(data.token);
        AsyncStorage.setItem('token', data.token);
    }

    function logout() {
        setUserLogged(null);
        setAuthToken(null);
        AsyncStorage.removeItem('token');
    }

    const value = {
        token: authToken,
        user: userLogged,
        isAuthenticated: !!authToken,
        saveToken: saveToken,
        logout: logout
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider;

import { createContext, useState } from "react";

export const AuthContext = createContext()

const user = {
    name:"shraddha",
    email:"shraddha@gmail.co"
}

export const AuthProvider = ({children})=>{
    const [isAuth, setIsAuth] = useState(false)
    const [userData, setUserData] = useState(null)

    const logOut = ()=>{
        setIsAuth(false)
        setUserData(null)
    }
    const login = ()=>{
        setIsAuth(true)
        setUserData(user)
    }

    return(
        <AuthContext.Provider value={{isAuth, logOut, login, userData}}>
            {children}
        </AuthContext.Provider>
    )
}
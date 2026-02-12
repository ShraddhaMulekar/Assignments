import { createContext, useState } from "react";

export const userContext = createContext()

export const UserProvider = ({children})=>{
    const [userName, setUserName] = useState("shraddha")
    return(
        <userContext.Provider value={userName}>
            {children}
        </userContext.Provider>
    )
}
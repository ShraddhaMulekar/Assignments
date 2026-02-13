import { createContext, useState } from "react"

export const themeContext = createContext()

export const ThemeProvider =({children})=>{
    const [theme, setTheme] = useState("light")

    const themeToggle = ()=>{
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <themeContext.Provider value={{theme, themeToggle }} >
            {children}
        </themeContext.Provider>
    )
}
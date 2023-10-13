import React, { useState, createContext, useContext } from 'react'

const themeContext = createContext()

export const useTheme = () => {
    return useContext(themeContext)
}

const ThemeContext = ({children}) => {
    const [ primaryColor, setPrimaryColor ] = useState("#000000")
    const [ secondaryColor, setSecondaryColor ] = useState("#141926")
    const [ tertiaryColor, setTertiaryColor ] = useState("#1675F2")

    const value = {
        primaryColor,
        secondaryColor,
        tertiaryColor,
        setPrimaryColor,
        setSecondaryColor,
        setTertiaryColor,
    }

    return (
        <>
            <themeContext.Provider value={value}>{children}</themeContext.Provider>
        </>
    )
}

export default ThemeContext
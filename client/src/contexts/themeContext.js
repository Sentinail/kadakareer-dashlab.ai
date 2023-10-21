import React, { useState, createContext, useContext } from 'react'

const themeContext = createContext()

export const useTheme = () => {
    return useContext(themeContext)
}

const ThemeContext = ({ children }) => {
    const [primaryColor, setPrimaryColor] = useState("#000000")
    const [secondaryColor, setSecondaryColor] = useState("#141926")
    const [tertiaryColor, setTertiaryColor] = useState("#1675F2")
    const [whiteColor, setWhiteColor] = useState("#FFFFFF")
    const [fourthColor, setFourthColor] = useState("#181F30")

    const value = {
        primaryColor,
        secondaryColor,
        tertiaryColor,
        whiteColor,
        fourthColor,
        setPrimaryColor,
        setSecondaryColor,
        setTertiaryColor,
        setWhiteColor,
        setFourthColor,
    }

    return (
        <>
            <themeContext.Provider value={value}>{children}</themeContext.Provider>
        </>
    )
}

export default ThemeContext
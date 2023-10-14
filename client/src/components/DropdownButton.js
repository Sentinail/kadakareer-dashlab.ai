import React, { useState } from 'react'
import { DropdownButtonContainerStyles, DropdownItemContainerStyles } from '../styled-components/DropdownButtonStyles'
import { Link } from 'react-router-dom'
import { useTheme } from '../contexts/themeContext'
import Button from './Button'

const DropdownButton = ({ buttonName, linkItems=[] }) => {
    const [ isActive, setIsActive ] = useState(false)
    const { primaryColor, secondaryColor, tertiaryColor } = useTheme()

    const handleClick = () => {
        setIsActive((prev) => {
            return !prev
        })
    }

    return (
        <>
            <DropdownButtonContainerStyles $primaryColor={primaryColor} $tertiaryColor={tertiaryColor} $isActive={isActive}>
                <Button className="dropdown_button" onClick={handleClick} $tertiaryColor={tertiaryColor}>
                    <p> { buttonName } </p>
                </Button>
                <div className="dropdown_item_container">
                    {
                        linkItems.map((linkItem, index) => {
                            return (    
                                <DropdownItemContainerStyles key={index}> 
                                    <Link to={linkItem.linkItemPath}> { linkItem.linkItemName } </Link> 
                                </DropdownItemContainerStyles>
                            )
                        })
                    }
                </div>
            </DropdownButtonContainerStyles>
        </>
    )
}

export default DropdownButton
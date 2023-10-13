import React, { useEffect, useRef } from 'react'
import { FileInputStyleContainer } from '../styled-components/FileInputStyles'
import { useTheme } from '../contexts/themeContext'

const FileInput = ({setFiles}) => {
    const { primaryColor, secondaryColor, tertiaryColor } = useTheme()

    const handleFileChange = (e) => {
        const filesArray = Array.from(e.target.files);
        setFiles(filesArray);
    }

    return (
        <>
            <FileInputStyleContainer $tertiaryColor={tertiaryColor}>
                <input onChange={(e) => {handleFileChange(e)}} type="file" id="fileInput" className="file-input" multiple={true} accept=".jpg, .jpeg, .png, .pdf"/>
                <label htmlFor="fileInput" className="custom-label"><p> Input Files </p></label>
            </FileInputStyleContainer>
        </>
    )
}

export default FileInput
import React from "react"
import { ExtractDocumentDescriptionStyles } from "../styled-components/ExtractDocumentDescriptionStyles"

const ExtractDocumentDescription = ({title, children: description}) => {
    return (
        <>
            <ExtractDocumentDescriptionStyles>
                <h1> <span>{title}</span> </h1>
                <p> {description} </p>
            </ExtractDocumentDescriptionStyles>
        </>
    )
}

export default ExtractDocumentDescription
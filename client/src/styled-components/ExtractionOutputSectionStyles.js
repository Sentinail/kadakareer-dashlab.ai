import styled from "styled-components";

export const ExtractionOutputSectionStyles = styled.div`
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    & .output_buttons {
        display: flex;
        gap: 20px;
    }

    & .output_preview {
        width: 100%;
        height: 250px;
        border: 1px solid ${props => {return props.$tertiaryColor}};
        gap: 20px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
    }
`

export const ExtractedWordBlockStyle = styled.div`
    padding: 10px;
    background-color: ${props => {return props.$tertiaryColor}};
    border-radius: 10px;
`

export const ExtractedPageBlockStyle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    & .results {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }
`

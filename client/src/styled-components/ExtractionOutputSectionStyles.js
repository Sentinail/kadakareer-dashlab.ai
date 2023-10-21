import styled from "styled-components";

export const ExtractionOutputSectionStyles = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    & .output_buttons {
        display: flex;
        gap: 20px;
    }

    & .output_preview {
        width: 100%;
        max-height: 500px;
        border: 1px solid ${props => {return props.$tertiaryColor}};
        gap: 20px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
    }

    & .result_form  {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    & .key_value_pairs, .table_values {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    & .key_value_pair {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        border: 1px solid ${props => {return props.$tertiaryColor}};
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

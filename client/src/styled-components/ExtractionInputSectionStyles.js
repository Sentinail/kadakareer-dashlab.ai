import styled from "styled-components";

export const ExtractionInputSectionStyles = styled.div`
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    & .input_buttons {
        display: flex;
        gap: 20px;
    }

    & .input_image_preview {
        width: 100%;
        height: 250px;
        border: 1px solid ${props => {return props.$tertiaryColor}};
        display: flex;
        gap: 20px;
        padding: 20px;
        align-items: center;
        overflow-x: scroll;
        overflow-y: hidden;

        & .input_image {
            width: 200px;
            height: 200px;
            object-fit: cover;
        }
    }
`

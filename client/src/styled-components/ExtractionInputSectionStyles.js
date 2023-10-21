import styled from "styled-components";

export const ExtractionInputSectionStyles = styled.div`
    width: 100%;
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
    }
`


export const ImageInputStyle = styled.div`
    position: relative;

    & .close_button {
        position: absolute;
        top: 0;
        left: 100%;
        width: 25px;
        height: 25px;
        background-color: ${props => {return props.$tertiaryColor}};
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;    
        transform: translate(-50%, -50%);
        border-radius: 100%;
        cursor: pointer;
    }
`

export const Image = styled.img`
    width: 200px;
    height: 200px;
    object-fit: contain;
`
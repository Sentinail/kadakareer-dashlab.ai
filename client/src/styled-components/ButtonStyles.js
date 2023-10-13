import styled from "styled-components";

export const ButtonStyleContainer = styled.button`
    min-width: 150px;
    max-height: 40px;
    padding: 10px;
    border: none;
    cursor: pointer;
    background-color: ${props => {
        return props.$tertiaryColor
    }};
    color: white;

    border-radius: 5px;

`

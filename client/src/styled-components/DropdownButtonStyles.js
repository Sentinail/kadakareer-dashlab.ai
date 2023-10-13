import styled from "styled-components";

export const DropdownButtonContainerStyles = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    background-color: ${props => {
        return props.$primaryColor
    }};

    & .dropdown_item_container {
        width: 100%;
        height: auto;
        position: absolute;
        
        top: ${props => {
            return props.$isActive ? "100%" : "-500%"
        }};
        transition: all 1s ease-in-out;
        background-color: ${props => {
            return props.$primaryColor
        }};
        z-index: -1;
    }
`

export const DropdownItemContainerStyles = styled.div`
    width: 100%;

    & a {
        width: 100%;
        padding: 10px;
        display: flex;
        text-decoration: none;
        color: white;
    }
`

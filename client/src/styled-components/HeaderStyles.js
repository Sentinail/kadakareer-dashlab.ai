import styled from "styled-components";

export const StyledHeaderContainer = styled.div`
    width: 100%;
    height: 60px;
    background-color: ${props => { return props.$primaryColor }};
    display: flex;
    align-items: center;
    position: fixed;
    border-bottom: 1px solid ${props => { return props.$tertiaryColor }};
    justify-content: space-between;
    padding-left: calc(5vw);
    padding-right: calc(5vw);
    z-index: 10;
    

    & .dashlabs {
        cursor: pointer;
    }
`
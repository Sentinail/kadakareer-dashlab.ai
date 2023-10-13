import styled from "styled-components";

export const StyledHeaderContainer = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    position: relative;
    background-color: ${props => {
        return props.$primaryColor
    }};
    justify-content: space-between;
    padding-left: calc(5vw);
    padding-right: calc(5vw);
    box-shadow: 0px 10px 30px 10px rgba(0,0,0,1);
    z-index: 10;
`
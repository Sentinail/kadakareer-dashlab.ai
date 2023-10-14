import styled from "styled-components";

export const LoadingStyles = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    z-index: 9000;

    & .background {
        width: 100vw;
        height: 100vh;
        position: fixed;
        opacity: 0.5;
        background-color: ${props => {return props.$primaryColor}};
    }

    & .content {
        position: fixed;
        top: 50vh;
        left: 50vw;
        transform: translate(-50%, -50%);
        width: 500px;
        height: 300px;
        border-radius: 10px;
        background-color: ${props => {return props.$tertiaryColor}};
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 40px;
    }
`
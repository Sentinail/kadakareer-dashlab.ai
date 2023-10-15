import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Kanit', sans-serif;
    }

    body {  
        background: rgb(0,0,0);
        background: linear-gradient(45deg, rgba(0,0,0,1) 0%, ${props => {return props.$secondaryColor}} 50%, rgba(0,0,0,1) 100%);
        color: white;
        min-height: 100vh;
    } 

    span {
        color: ${props => {
            return props.$tertiaryColor
        }};
    }

    ::-webkit-scrollbar {
        width: 8px; 
    }

    
    ::-webkit-scrollbar-track {
        background: ${props => {return props.$secondaryColor}};
    }

    
    ::-webkit-scrollbar-thumb {
        background: ${props => {return props.$tertiaryColor}};
    }

    
    ::-webkit-scrollbar-thumb:hover {
        background: ${props => {return props.$tertiaryColor}};
    }
`

export default GlobalStyles
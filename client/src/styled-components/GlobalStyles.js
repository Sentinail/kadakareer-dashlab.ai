import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Kanit', sans-serif;
    }

    body {  
        background-color: ${props => {
            return props.$secondaryColor
        }};
        color: white;
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
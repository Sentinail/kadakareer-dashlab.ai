import styled from "styled-components";

export const ExtractDocumentPageContainerStyles = styled.div`
    width: 100%;
    padding: calc(5vw);
    font-size: 1.1rem;
    position: relative;
    animation: fade-in ease-in-out 1s;

    & .hero_section {
        margin-bottom: 80px;
    }

    & .extraction_section {
        display: flex;
        gap: 80px;
        justify-content: space-between;
        flex-direction: column;
    }

    @keyframes fade-in {
        0% {opacity: 0}
        100% {opacity: 1}
    }
`

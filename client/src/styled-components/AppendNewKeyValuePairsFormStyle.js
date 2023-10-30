import styled from "styled-components";

export const AppendNewKeyValuePairsFormContainer = styled.form`
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;

    button {
        @media screen and (max-width: 700px) {
            width: 100%;
        }
    }

    input {
        min-height: 40px;
        border: none;
        border-radius: 5px;
        text-align: center;

        @media screen and (max-width: 700px) {
            width: 100%;
        }
    }

    @media screen and (max-width: 700px) {
        text-align: center;
        flex-direction: column;
        gap: 20px;
    }
`

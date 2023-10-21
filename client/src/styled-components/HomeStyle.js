import styled from "styled-components";




export const SectionContainer = styled.section`
    min-height: 100svh;
    padding: 10rem 9% 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    & .aboutContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-self: flex-start;
    }

    .aboutContainer div h1{
        text-align: center;
    }
    `

export const ItemCenter = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 2rem 9%;
    background-color: #232D45;
    opacity: 93%;
    color: #ffff;

    & .iconTop a{
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: .8rem;
        background-color: #3e80c2;
        border-radius: 0.3rem;
        transition: .5s ease;
        color: #ffffff;
        font-size: 1.4rem
    }

    .iconTop a:hover{
        box-shadow: 0 0 1rem #4893df;
    }
`
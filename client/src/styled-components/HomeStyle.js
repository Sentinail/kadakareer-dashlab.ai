import styled from "styled-components";




export const SectionContainer = styled.section`
    min-height: 100svh;
    padding: 2rem 9% 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    & .imageContainer img{
        width: 455px;
        margin-right: 50px
    }

    .textContainer{
        color: #FFFFFF;
        width: 645px;
    }

    .textContainer p{
        opacity: 60%;
        margin-top: 25px;
    }

    .textContainer2{
        color: #FFFFFF;
        width: 645px;
    }

    .textContainer2 p{
        opacity: 60%;
        margin-top: 20px;
        line-height: 2rem;
        margin-right: 40px
    }

    .imageContainer2 img{
        width: 455px;
    }
    
    .aboutSection{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #FFFFFF;
    }

    .aboutSection title h1{
        text-align: center;
    }

    .textContainer3 p{
        opacity: 60%;
        margin-top: 40px;
        text-align: center;
        width: 920px;
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

    & div p{
        opacity: 70%;
    } 
    
    .iconTop a{
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: .8rem;
        background-color: #3e80c2;
        border-radius: 0.3rem;
        transition: .5s ease;
        color: #ffffff;
        font-size: 1.4rem;
    }

    .iconTop a:hover{
        box-shadow: 0 0 1rem #4893df;
    }
`
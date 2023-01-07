import styled from "styled-components";

export const AboutContainer = styled.div`
    
    display: flex;
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#151515,#000000);

`;

export const AboutText = styled.div`
    
    width: 50vw;
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    @media (max-width: 900px) {
        width: 100vw;
    }

    #title{
        font-family: 'Montserrat';
        font-size: 2rem;
        padding-bottom: 20vh;
        padding-left: 10%;
        padding-right: 10%;

        span{
            background-color: ${({ theme }) => theme.tertiary};
            color: ${({ theme }) => theme.primary};
        }
    }

    #text{
        font-size: 1.5rem;
        font-weight: 400;
        font-family: 'Montserrat';
        padding: 0 10%;
        letter-spacing: 0.1vw;
        line-height: 2rem;
        color: ${({ theme }) => theme.primary};
    }

`;

export const AboutImage = styled.div`

    width: 50vw;
    height: 100vh;

    @media (max-width: 900px) {
        display: none;
    }

`;
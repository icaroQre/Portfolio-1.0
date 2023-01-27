import styled from "styled-components";

export const AboutContainer = styled.div`
    
    display: flex;
    flex-direction: row;

    @media (max-width: 1025px) {
        flex-direction: column;
    }

    #desktop{
        display: block;

        @media (max-width: 1025px) {
        display: none;
    }
    }

    #mobile{

        display: none;

        @media (max-width: 1025px) {
        display: block;
        visibility: ${({ visible }) => visible ? "hidden" : "visible" };
    }
    }

`;

export const AboutTextContainer = styled.div`
    
    width: 50vw;
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-top: 5rem;
    font-size: 30px;

    @media (max-width: 1025px) {
        height: auto;
        width: 100vw;
    }

`;

export const AboutTitle = styled.div`

    margin-bottom: 5rem;
    padding: 0 10%;
    color: ${({ theme }) => theme.secondary};
    font-size: 4rem;
    font-weight: 400;

    @media (max-width: 1025px) {
        margin-left: auto;
        margin-right: auto;
        font-size: 3rem;
        margin-bottom: 4rem;
    }
    
`;

export const AboutTextFirst = styled.div`

    font-weight: 300;
    font-family: 'Poppins', sans-serif;
    padding: 0 10%;
    letter-spacing: 0.1vw;
    line-height: 2rem;
    color: ${({ theme }) => theme.textPrimary};
    margin-bottom: 32px;
    font-size: 1.2rem;

    @media (max-width: 1025px) {
        font-size: 1rem;
    }

`;

export const AboutTextSecond = styled.div`

    font-weight: 300;
    font-family: 'Poppins', sans-serif;
    padding: 0 10%;
    letter-spacing: 0.1vw;
    line-height: 2rem;
    color: ${({ theme }) => theme.textPrimary};
    font-size: 1.2rem;

    @media (max-width: 1025px) {
        font-size: 1rem;
    }

`;

export const AboutImage = styled.div`

    width: 50vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1025px) {
        height: 15vh;
        width: 100vw;
        padding: 4rem 0;
    }

`;
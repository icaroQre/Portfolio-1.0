import styled from "styled-components";

export const AboutContainer = styled.div`
    
    display: flex;
    flex-direction: row;
    padding-top: 4rem;
    padding-bottom: 4rem;

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

    @media (max-width: 1025px) {
        height: auto;
        width: 100vw;
    }

`;

export const AboutTitle = styled.div`

    font-family: 'Rajdhani', sans-serif;
    margin-bottom: 4rem;
    padding: 0 10%;
    color: ${({ theme }) => theme.secondary};
    font-size: 32px;
    font-weight: 900;

    @media (max-width: 1025px) {
        margin-left: auto;
        margin-right: auto;
        font-size: 24px;
        margin-bottom: 2rem;
        font-weight: bold;
    }
    
`;

export const AboutTextFirst = styled.div`

    font-weight: 300;
    font-family: 'Poppins', sans-serif;
    padding: 0 10%;
    letter-spacing: 0.1vw;
    line-height: 2rem;
    color: ${({ theme }) => theme.textPrimary};
    margin-bottom: 1rem;
    font-size: 16px;

    @media (max-width: 1025px) {
        font-size: 14px;
    }

`;

export const AboutTextSecond = styled.div`

    font-weight: 300;
    font-family: 'Poppins', sans-serif;
    padding: 0 10%;
    letter-spacing: 0.1vw;
    line-height: 2rem;
    color: ${({ theme }) => theme.textPrimary};
    font-size: 16px;
    margin-bottom: 4rem;

    @media (max-width: 1025px) {
        font-size: 14px;
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
    }

`;
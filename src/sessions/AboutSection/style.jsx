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

    font-family: 'Montserrat';
    font-size: 2rem;
    margin-bottom: 8rem;
    padding: 0 10%;
    color: ${({ theme }) => theme.secondary};
`;

export const AboutText1 = styled.p`

    font-size: 1.2rem;
    font-weight: 400;
    font-family: 'Montserrat';
    padding: 0 10%;
    letter-spacing: 0.1vw;
    line-height: 2rem;
    color: ${({ theme }) => theme.textPrimary};
    margin-bottom: 40px;

`;

export const AboutText2 = styled.p`

    font-size: 1.2rem;
    font-weight: 400;
    font-family: 'Montserrat';
    padding: 0 10%;
    letter-spacing: 0.1vw;
    line-height: 2rem;
    color: ${({ theme }) => theme.textPrimary};

`;

export const Contrast = styled.span`

    font-weight: 500;
    color: ${({ theme }) => theme.secondary};

`;

export const AboutImage = styled.div`

    width: 50vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1025px) {
        height: 50vh;
        width: 100vw;
    }

`;
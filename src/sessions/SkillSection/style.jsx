import styled from "styled-components";

export const SkillContainer = styled.div`
    
    display: flex;
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#151515,#000000);

`;

export const SkillTextContainer = styled.div`
    
    width: 50vw;
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    @media (max-width: 900px) {
        width: 100vw;
    }

`;

export const SkillTitle = styled.div`

    font-family: 'Montserrat';
    font-size: 2rem;
    padding-bottom: 20vh;
    padding-left: 10%;
    padding-right: 10%;

`;

export const SkillText = styled.p`

    font-size: 1.5rem;
    font-weight: 400;
    font-family: 'Montserrat';
    padding: 0 10%;
    letter-spacing: 0.1vw;
    line-height: 2rem;
    color: ${({ theme }) => theme.textPrimary};

`;

export const Contrast = styled.span`

    color: ${({ theme }) => theme.primary};

`;

export const SkillImage = styled.div`

    width: 50vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 900px) {
        display: none;
    }

`;
import styled from "styled-components";

export const ProjectsContainer = styled.div`

    @media (max-width: 1025px) {
        display: flex;
        flex-direction: column;
    }

    #desktop{
        display: block;
        visibility: ${({ visible }) => visible ? "hidden" : "visible" };

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

export const ProjectsTextContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ProjectsTitle = styled.div`

    font-family: 'Montserrat';
    font-size: 2rem;
    margin-bottom: 64px;
    padding: 32px;
    color: ${({ theme }) => theme.secondary};
`;

export const Contrast = styled.span`

    font-weight: 500;
    color: ${({ theme }) => theme.secondary};

`;

export const ProjectsImage = styled.div`

    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1025px) {
        height: 50vh;
        width: 100vw;
    }

`;
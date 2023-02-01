import styled from "styled-components";

export const Container = styled.div`

    max-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    @media (max-width: 1025px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 2rem 0;
    }

`

export const ProjectTitle = styled.div`

    font-family: 'Rajdhani', sans-serif;
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 32px;
    font-weight: 900;
    padding-bottom: 4rem;
    padding-top: 6rem;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;

    @media (max-width: 1025px) {
        font-size: 24px;
        font-weight: 900;
        padding-top: 4rem;
        padding-bottom: 0rem;
    }

    .desc{
        font-family: 'Poppins', sans-serif;
        font-size: 18px;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.text};
        padding-top: 1rem;

        @media (max-width: 1025px) {
        font-size: 14px;
        font-weight: 400;
    }
    }
    
`;


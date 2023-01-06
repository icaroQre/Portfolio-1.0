import styled, { keyframes } from "styled-components";

export const MainContainer = styled.div`

    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#151515,#000000);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const MainText = styled.div`

    width: 50vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 900px) {
        width: 100vw;
    }

    #name{
        font-family: 'Montserrat', sans-serif;
        font-size: 4rem;
        font-weight: 600;
        padding-bottom: 1rem;
        padding-left: 10%;
        color: ${({ theme }) => theme.primary};
    }

    #title{
        font-family: 'Montserrat', sans-serif;
        font-size: 2rem;
        font-weight: 300;
        padding-left: 10%;
        color: ${({ theme }) => theme.primary};
        
        span{
            background-color: ${({ theme }) => theme.tertiary};
        }
    }
`;

export const MainImage = styled.div`

    width: 50vw;
    height: 100vh;

    @media (max-width: 900px) {
        display: none;
    }
`;

const jumping = keyframes`

    0%{ 
        transform: translateY(0);
     }
    50%{ 
        transform: translateY(-5vh);
    }
    100%{ 
        transform: translateY(0);
     }

`;

export const ArrowDownStyled = styled.div`

    position: fixed;
    top: 95vh;
    left: auto;
    right: auto;
    animation: ${jumping} 2s infinite;
    z-index: 0;
    color: ${({ theme }) => theme.primary};
`;
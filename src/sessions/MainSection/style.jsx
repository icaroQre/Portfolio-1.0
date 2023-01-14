import styled, { keyframes } from "styled-components";

export const gradient = keyframes`
   
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`;

export const MainContainer = styled.div`

    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    @media (max-width: 1025px) {
        flex-direction: column;
    }
`;

export const MainText = styled.div`

    width: 50vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }

    #name{
        font-family: 'Poppins', sans-serif;
        font-size: 4rem;
        font-weight: 500;
        padding-bottom: 1rem;
        color: ${({ theme }) => theme.secondary}; 
    }
`;

const typing = keyframes`
    0% { width: 0% }
    40% { width: 100% }
    60% { width: 100% }
    100% { width: 0 }
`;
const blinkCaret = keyframes`
    from, to { border-color: transparent }
    50% { border-color: #ffffff }
`;

export const TypeWriter = styled.div`

    p{
        font-size: 2rem;
        color: ${({ theme }) => theme.textPrimary};
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        overflow: hidden;
        border-right: .15em solid orange;
        white-space: nowrap;
        margin: 0 auto;
        animation: 
        ${typing} 8s steps(20) infinite,
        ${blinkCaret} .5s step-end infinite;
    }
`;

export const MainImage = styled.div`

    width: 50vw;
    height: 100vh;

    @media (max-width: 1025px) {
        height: auto;
        width: 100vw;
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
    position: absolute;
    top: 90vh;
    left: auto;
    right: auto;
    animation: ${jumping} 2s infinite;
    z-index: 0;
    color: ${({ theme }) => theme.textPrimary};
    visibility: ${({ visible }) => visible ? "hidden" : "visible" };
`;
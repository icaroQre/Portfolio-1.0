import styled, { keyframes } from "styled-components";

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
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (max-width:1025px) {
            width: 100vw;
        }

    .container{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }

    #name{
        
        font-family: 'Rajdhani', sans-serif;
        font-size: 6rem;
        font-weight: 500;
        padding-bottom: 24px; 
        line-height: 4.5rem;
        color: ${({ theme }) => theme.colors.secondary};

        @media (max-width:1025px) {
            font-size: 5rem;
            padding-bottom: 20px;
            padding-left: 15%;
        }
    }

    .switch-icon-mobile{
        font-size: 175px;
        color: ${({ theme }) => theme.colors.text};
        cursor: pointer;
        display: none;

        @media (max-width: 1025px) {
            font-size: 100px;
            margin-top: 6rem;
            display: flex;
        }
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
    50% { 
        border-color: orange        
        }
`;

export const TypeWriter = styled.div`

    @media (max-width:1025px) {
            padding-left: 15%;
        }
            
    p{  
        font-family: 'Rajdhani', sans-serif;
        font-size: 3rem;
        color: ${({ theme }) => theme.colors.secondary};
        font-weight: 300;
        overflow: hidden;
        border-right: .15em solid white;
        white-space: nowrap;
        margin: 0 auto;
        animation: 
        ${typing} 8s steps(20) infinite,
        ${blinkCaret} .5s step-end infinite;

        @media (max-width:1025px) {
            font-size: 2rem;
        }
    }
`;

export const MainImage = styled.div`

    width: 50vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1025px) {
        display: none;
    }

    .switch-icon{
        font-size: 175px;
        color: ${({ theme }) => theme.colors.secondary};
        cursor: pointer;
        transition: all ease-in-out .4s;

        @media (max-width: 1025px) {
            display: none;
    }
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

     @media (max-height: 500px) {
        display: none;
     }
`;
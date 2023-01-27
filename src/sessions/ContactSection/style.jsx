import styled from "styled-components";

export const Container = styled.div`

    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;

    p{
        margin-bottom: 32px;
        font-family: 'Poppins', sans-serif;
    }
`;

export const Text = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.textPrimary};
    font-size: 1.5rem;
    font-family: 'Poppins', sans-serif;
    
    p{
        font-size: 1rem;
        margin-bottom: 1rem;
    }
`;

export const EmailStyled = styled.div`

    @media (max-width: 1025px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: 'Poppins', sans-serif;
    }

`;

export const ContactPhoto = styled.img`

    margin: 64px;
    border-radius: 50%;
    overflow: hidden;
    width: 300px;
    height: 300px;
    transition: transform ease 1s;

    :hover{
        transform: rotateZ(360deg);
    }

    @media (max-width: 1025px) {
        width: 250px;
        height: 250px;
    }

`;

export const ContactIcons = styled.div`

    width: 100vw;
    max-width: 600px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    li{
        list-style: none;
        transition: all ease-out 0.3s;

        :hover{
            cursor: pointer;
            scale: 1.5;
        }

    }

`;
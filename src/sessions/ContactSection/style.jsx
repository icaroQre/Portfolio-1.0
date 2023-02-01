import styled from "styled-components";

export const Container = styled.div`

    width: 100vw;
    min-height: calc(100vh - 40px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;

    p{
        margin-bottom: 32px;
        font-weight: 300;
        font-family: 'Poppins', sans-serif;
        font-size: 18px;
        color: ${({ theme }) => theme.colors.text};

        @media (max-width: 1025px) {
            font-size: 14px;
        }
    }
`;

export const Text = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Poppins', sans-serif;
    
    p{
        font-size: 18px;
        margin-bottom: 1rem;

        @media (max-width: 1025px) {
            font-size: 14px;
        }
    }
`;

export const EmailStyled = styled.div`

    font-size: 24px;

    @media (max-width: 1025px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: 'Poppins', sans-serif;
        font-size: 24px;
    }

`;

export const ContactPhoto = styled.img`

    margin: 6rem;
    border-radius: 50%;
    overflow: hidden;
    width: 250px;
    height: 250px;
    transition: transform ease 1s;
    -webkit-box-shadow: 0px 3px 37px 10px rgba(0,0,0,0.46);
    -moz-box-shadow: 0px 3px 37px 10px rgba(0,0,0,0.46);
    box-shadow: 0px 3px 37px 10px rgba(0,0,0,0.46);

    :hover{
        transform: rotateZ(360deg);
    }

    @media (max-width: 1025px) {
        width: 200px;
        height: 200px;
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

        .contact-icon{
            color: ${({ theme }) => theme.colors.secondary};
            font-size: 36px;
        }

        :hover{
            cursor: pointer;
            scale: 1.5;
        }

    }

`;
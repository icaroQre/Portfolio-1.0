import styled from "styled-components";

export const HeaderStyled = styled.header`

    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: ${({ theme }) => theme.colors.tertiary};
    transition: all ease .4s;
    opacity: 1;

    @media (max-width: 1025px) {
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
        background-image: none;
    }
`;

export const MobileMenuStyled = styled.div`

    display: none;

    :hover{

        transform: rotateZ(${({ visible }) => visible ? "90deg" : "0deg" });
    }

    @media (max-width: 1025px) {
        display: flex;
        padding: 8px;
        cursor: pointer;
        transition: all ease 0.5s;
    }

`;

export const MenuStyled = styled.ul`

    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    margin: 0;
    padding: 0 10%;
    overflow: hidden;
    transition: all ease 0.5s;

    li{
        font-weight: 500;
        font-family: 'Poppins', sans-serif;
        font-size: 1rem;
        text-decoration: none;
        padding: 16px 24px;
        outline: none;
        color: #FFF;
        transition: all ease 0.5s;
        border-bottom: solid transparent 3px;
        
        a{
            text-decoration: none;
            color: #FFF;
        }
        :hover{
            cursor: pointer;
            border-color: #FFF;
        }
    }

    @media (max-width: 1025px) {

        position: absolute;
        top: calc(52px);
        transform: translateX(${({ visible }) => visible ? "0" : "100vw" });
        background-color: ${({theme})=> theme.colors.tertiary};
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        text-align: center;
        width: 100vw;
        height: calc(100vh - 52px);
        padding:0;
        border-top: solid ${({ theme }) => theme.colors.white} 2px;

        li{
            color: #${({ theme }) => theme.colors.white};
            width: 100vw;
            
            :hover{
                background-color: ${({theme})=> theme.colors.white};
                color: ${({theme})=> theme.colors.primary};
            }
        }
    }
`;
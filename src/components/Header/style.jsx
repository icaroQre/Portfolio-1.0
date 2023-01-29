import styled from "styled-components";

export const HeaderStyled = styled.header`

    background: rgba(11, 11, 11, 0.7);
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;

    @media (max-width: 1025px) {
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
        background-color: transparent;
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
        padding: 16px;
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
    font-weight: 300;
    overflow: hidden;
    transition: all ease 0.5s;

    li{
        font-family: 'Poppins', sans-serif;
        font-size: 1rem;
        text-decoration: none;
        padding: 16px 24px;
        outline: none;
        color: ${({theme}) => theme.secondary};
        transition: all ease 0.5s;
        border-bottom: solid transparent 3px;
        :hover{
            cursor: pointer;
            border-color: ${({ theme }) => theme.secondary};
        }
    }

    @media (max-width: 1025px) {

        position: absolute;
        top: calc(68px);
        transform: translateX(${({ visible }) => visible ? "0" : "100vw" });
        background: rgba(0, 0, 0, 0.75);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(10.4px);
        -webkit-backdrop-filter: blur(10.4px);
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        text-align: center;
        width: 100vw;
        height: calc(100vh - 68px);
        padding:0;

        li{
            color: ${({ theme }) => theme.secondary};
            width: 100vw;
            
            :hover{
                background-color: ${({ theme }) => theme.secondary};
                color: ${({ theme }) => theme.primary};
            }
        }
    }
`;
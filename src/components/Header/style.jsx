import styled from "styled-components";

export const HeaderStyled = styled.header`

    width: 100vw;
    background-color: ${( { theme } ) => theme.primary};
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: fixed;
    top: 0;
    left: 0;

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
    }
`;

export const MobileMenuStyled = styled.div`

    display: none;

    :hover{
    
        transform: rotateZ(${({ visible }) => visible ? "90deg" : "0deg" });
    }

    @media (max-width: 900px) {
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
    font-weight: 600;
    overflow: hidden;
    transition: all ease 0.5s;

    li{
        font-family: 'Raleway', sans-serif;
        font-size: 1.2rem;
        text-decoration: none;
        padding: 16px 24px;
        outline: none;
        color: ${({theme}) => theme.secondary};
        transition: all ease 0.5s;


        :hover{
            cursor: pointer;
            background-color: ${({ theme }) => theme.tertiary};
            color: ${({ theme }) => theme.primary};
        }
    }

    @media (max-width: 900px) {

        position: absolute;
        top: calc(68px);
        transform: translateX(${({ visible }) => visible ? "0" : "100vw" });
        background-color: ${({ theme }) => theme.primary};
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
                background-color: ${({ theme }) => theme.tertiary};
                color: ${({ theme }) => theme.primary};
            }
        }
    }
`;
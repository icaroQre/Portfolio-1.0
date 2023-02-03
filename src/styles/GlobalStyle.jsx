import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.primary};
    }

    *::-webkit-scrollbar {
    width: 12px;
    }

    *::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.primary};
    }

    *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.textPrimary};
    border-radius: 20px;
    }

    body{
        font-family: 'Rajdhani', sans-serif;
        overflow-x: hidden;
        background: ${({theme}) => theme.colors.background};
        color: ${({theme}) => theme.colors.text};
    }

`;

export default GlobalStyle;
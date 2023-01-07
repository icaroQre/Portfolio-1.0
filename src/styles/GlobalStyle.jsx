import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.secondary};
    }

    /* Works on Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
    width: 12px;
    }

    *::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.secondary};
    }

    *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.secondaryLight};
    border-radius: 20px;
    }

    body{
        font-family: 'Montserrat', sans-serif;
        overflow-x: hidden;
    }

`;

export default GlobalStyle;
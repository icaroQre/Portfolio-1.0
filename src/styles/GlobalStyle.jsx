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
        font-family: 'Gumok', 'sans-serif';
        overflow-x: hidden;
        background-image: linear-gradient(90deg,#151515,#000);
    }

`;

export default GlobalStyle;
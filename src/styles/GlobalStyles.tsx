import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'Clash Grotesk';
    src: url('/fonts/ClashGrotesk-Variable.ttf') format('truetype');
    font-weight: 100 900; /* Ajuste para fontes variáveis */
    font-style: normal;
}
html,
body {
    background: ${(props) => props.theme.colors.black};
    font-family: 'Inter', sans-serif;
    font-size: 10px;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    font-family: 'Clash Grotesk', sans-serif; 
};

body {
    overflow-y: hidden;
}

a {
    color: inherit;
    text-decoration: none;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &::-webkit-scrollbar {
        width: 0.6rem;
        height: 0.5rem;
        background-color: ${({ theme }) => theme.colors.black};
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background: ${({ theme }) => theme.colors.primaryBlue};
    }
}

button{
    all: unset;
}
`;

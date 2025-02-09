import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html,
body {
    background: ${(props) => props.theme.colors.black};
    font-family: 'Inter', sans-serif;
    font-size: 10px;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
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

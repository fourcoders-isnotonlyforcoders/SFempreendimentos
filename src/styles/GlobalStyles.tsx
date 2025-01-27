import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
html,
body {
    padding: 0;
    margin: 0;
    background: ${(props) => props.theme.colors.secondary};
    font-family: 'Inter', sans-serif;
    font-size: 10px;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
};


a {
    color: inherit;
    text-decoration: none;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
button{
    all: unset;
}
`;


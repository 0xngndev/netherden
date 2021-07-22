import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
        --primaryColor: #662BE3;
        --secondaryColor: #2BB7E3;
        --grey: #B1B1B1;
        --gray: var(--grey);
        --maxWidth: 1000px;
        --bs: 7px 12px 24px 0 rgba(0,0,0,0.19);
        --bgColor: #07101A;
		font-size: 62.5%; 
    }
    *, *:before, *:after {
        box-sizing: border-box;
    }
    body {
        font-family: 'Miriam Libre',--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding: 0;
        margin: 0;
        color: #fff;
        font-size: 1.5rem;
        line-height: 2;
        background-color: #07101A;
    }
    a {
        text-decoration: none;
        color: #fff;
    }

    a:hover {
        text-decoration: underline;
    }
    button {
        font-family: 'Miriam Libre',--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: #fff;
    }
`;

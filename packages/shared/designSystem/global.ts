import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
        --primaryColor: #21F382;
        --secondaryColor: #39BC9D;
        --buttonBackground: rgba(4, 9, 13, 0.5);
        --lowOpBlue: rgba(57, 188, 157, 0.53);
        --black: #393939;
        --grey: #3A3A3A;
        --gray: var(--grey);
        --lightGrey: #e1e1e1;
        --lightGray: var(--lightGray);
        --offWhite: #ededed;
        --maxWidth: 1000px;
        --bs: 7px 12px 24px 0 rgba(0,0,0,0.19);
		font-size: 62.5%; 
    }
    *, *:before, *:after {
        box-sizing: border-box;
    }
    body {
        font-family: 'Miriam Libre',--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding: 0;
        margin: 0;
        color: var(--offWhite);
        font-size: 1.5rem;
        line-height: 2;
        background-color: #07101A;
    }
    a {
        text-decoration: none;
        color: var(--offWhite);
    }

    a:hover {
        text-decoration: underline;
    }
    button {
        font-family: 'Miriam Libre',--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;

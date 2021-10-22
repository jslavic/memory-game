import { createGlobalStyle } from "styled-components";

/**
 * Only removes default css padding and margins from the body
 */

const GlobalStyle = createGlobalStyle`
    body {padding:0;margin: 0;}

    body {
        font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
        min-height: 100vh;
        background-color: #ffcdb2;
    }
`;

export default GlobalStyle
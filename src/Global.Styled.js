import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    transition: all 0.45s linear;
    a{
        text-decoration:none;
    }
  }
`;

export default GlobalStyle;

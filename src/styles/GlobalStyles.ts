import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html,
  body {
    font-size: 62.5%;
    width: 100%;
    min-height: 100vh;
    font-family: 'Raleway', sans-serif;
  }
  h1, h2, span, p {
    color: var(--title);
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --white: #FFFFFF;
    --secondary: #4C00E8;
    --yellow: #F2E205;
    --gray: #5F5F5F;
    --title: #1F1F1F;
    --grayLight: #ECECEC; 
    --black: #171717;
  }
`;

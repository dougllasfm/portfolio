import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: var(--primary);
    font-family: 'Poppins', sans-serif;
    color: var(--white);
    background-image: url("bg-texture.png");
  }

  :root {
    --primary: #11101d;
    --white: #FFFFFF;
    --dark: #2c2c6c;
    --secondary: #4bb5ff;
    --yellow: #F2E205;
    --gray: #c4c4c4;
    --title: #1F1F1F;
    --grayLight: #ECECEC; 
    --black: #000;

    --container-width-lg: 75%;
    --container-width-md: 85%;
    --container-width-ms: 90%;

    --transition: all 400ms ease;
  }
`;

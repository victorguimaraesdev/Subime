import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", serif;
  }
  :root {
    --primary: #0A1828;
    --secundary: #178582;
    --gold: #BFA181;
    --primary2: #d4b521;
    --supp:rgb(255, 255, 255);
    --supp2: #d3d3d3;
    --transparent: rgba(0, 0, 0, 0.9);
  }
  body {
    background: radial-gradient(circle, #0A1828 0%, rgb(0, 0, 0) 100%);
    color: var(--supp);
    font-size: 1.2rem;
    font-weight: 400;
  }
  ul{
    list-style-type: none;
  }
  a{
    text-decoration: none;
    color: var(--secundary);
  }
`;
export default GlobalStyle;

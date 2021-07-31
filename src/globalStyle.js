import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  
  html {
    font-size: 62.5%;
  }
  
  body {
    box-sizing: border-box;
    font-family: 'montserrat', sans-serif;
    height: 100%;
    min-height: 100vh;
    background: linear-gradient(#26B8D5, #1A5E92);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  a {
    text-decoration: none;
  }
  
  ul, li {
    list-style: none;
  }
`;
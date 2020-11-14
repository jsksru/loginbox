import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  
  * {
    box-sizing: border-box;  
  }
  html {
    font-size: 10px;
  }
  body {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    font-family: Arial, Helvetica, sans-serif;
  }
  img {
    max-width: 100%;
    height: auto;
  }

`;
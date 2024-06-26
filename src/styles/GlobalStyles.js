import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root{
    --primary: #088E60;
    --secondary: #753AFF;
    --darkBlue: #070747; 
    --darkPurple: #0E0034;
    --black-1: #3A4043;
    --black-2: #151718;
    --white-1: #C6BED9;
    --gray: #64718A;
    --grey: var(--gray);
    --white: white;
    --black: black;
  }
  
  body{
    min-height: 100vh;
    line-height: 1.5;
    width: 100%;
    font-family: 'Inter';
    background: #151718;
    color: var(--white);
  }
  a{
    text-decoration: none;
    color: var(--white);
  }
  .container{
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
  }
  img, svg{
    height: 100%;
    width: 100%;
  }
  li, ul{
    list-style: none;
  }
`;

export default GlobalStyles;

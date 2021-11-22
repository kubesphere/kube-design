import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html,
  body {
    background-color: ${({ theme }) => theme.palette.background};
    //color: #242e42;
  }
`;

export default GlobalStyles;

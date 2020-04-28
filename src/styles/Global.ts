import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box
  }
  body{
    background: ${(props) => props.theme.colors.primary};
    font-size: 14px;
    color: ${(props) => props.theme.colors.text};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`;

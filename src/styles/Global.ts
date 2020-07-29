/* eslint-disable indent */
import { createGlobalStyle, keyframes } from 'styled-components';
import { getImageAPI } from '../utils/backgroundImage';

// Square mousemove
const squareAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
export default createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box
  }
  html, body, #root{
    height: 100%;
  }
  body{
    background-color: ${({ theme }) => theme.colors.background};
    background-image: url(${getImageAPI()});
    background-size: 240px;
    font-size: 16px;
    color: ${(props) => props.theme.colors.text};
    overflow-x: hidden;
    transition: background-color 500ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  *, button, input{
    font-family: '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif';
    border: 0;
    outline: 0;
  }
  /* Scrollbar */
  ::-webkit-scrollbar {
    background: #576574;
    width: 5px;
  }
  ::-webkit-scrollbar-thumb{ 
    background: ${({ theme }) =>
      `-webkit-linear-gradient(100deg, ${theme.colors.upColor},${theme.colors.downColor})`};
    border-radius: 21px;
  }
  ::-webkit-scrollbar-thumb:hover{
    background: ${({ theme }) =>
      `-webkit-linear-gradient(100deg, ${theme.colors.upColorInverted},${theme.colors.downColorInverted})`};
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 10px 0 10px #222f3e;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) =>
      `${theme.colors.footer} ${theme.colors.downColor}`};
    transition: scrollbar-color 500ms ease-in-out;
  }
  /* Fim Scrollbar */

  /* Square mousemove */
  .square{
    z-index: -1;
    height: 20px;
    width: 20px;
    opacity: 0;
    border-radius: 15%;
    position: fixed;
    transform: translate(-50%, 50%);
    animation: ${squareAnimation} 1s 1;
  }
  a {
    text-decoration: none;
  }
`;

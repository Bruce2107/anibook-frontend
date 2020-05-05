import { createGlobalStyle, keyframes } from 'styled-components';
import getImage from '../utils/backgroundImage';

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
  body{
    background: ${({ theme }) => theme.colors.background};
    background-image: url(${getImage()});
    background-size: 240px;
    font-size: 14px;
    color: ${(props) => props.theme.colors.text};
    font-family: '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif';
  }
  /* Scrollbar */
  ::-webkit-scrollbar{
    background: "#576574";
    width: 5px;
  }
  ::-webkit-scrollbar-thumb{
    background: ${({ theme }) =>
      `-webkit-linear-gradient(100deg, ${theme.colors.upColor},${theme.colors.downColor})`};
    border-radius: 21px;
  }
  ::-webkit-scrollbar-thumb:hover{
    background: ${({ theme }) =>
      `-webkit-linear-gradient(100deg, ${theme.colors.upColor_inverted},${theme.colors.downColor_inverted})`};
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 10px 0 10px #222f3e;
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
`;

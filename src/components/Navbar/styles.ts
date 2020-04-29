import styled from 'styled-components';

export const StyledNavbar = styled.div`
  width: 100vw;
  background: ${({ theme }) => theme.colors.primary};
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.4);
  z-index: 999;
  opacity: 0.9;
  padding: 0 50px;
  position: fixed;
`;

export const StyledLogo = styled.a`
  cursor: pointer;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  font-size: 24px;
  font-weight: bold;
  font-style: oblique;
  padding: 0 20px;
  background: ${({ theme }) =>
    `-webkit-linear-gradient(100deg, ${theme.colors.upColor},${theme.colors.downColor})`};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  &:hover {
    background: ${({ theme }) =>
      `-webkit-linear-gradient(100deg, ${theme.colors.upColor_inverted},${theme.colors.downColor_inverted})`};
    background-clip: text;
    -webkit-background-clip: text;
  }
`;

export const StyledButton = styled.a`
  font-size: 24px;
  height: 50px;
  width: 100px;
  line-height: 50px;
  padding: 0 35px;
  display: inline-block;
  color: ${({ theme }) =>
    theme.title === 'light' ? theme.colors.downColor : theme.colors.upColor};
  &:hover {
    background: #ffea;
    color: ${({ theme }) =>
      theme.title === 'light'
        ? theme.colors.upColor_inverted
        : theme.colors.downColor_inverted};
    cursor: pointer;
  }
  svg {
    margin-top: 0.5em;
  }
`;

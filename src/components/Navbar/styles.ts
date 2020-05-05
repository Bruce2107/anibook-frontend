import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  width: 100vw;
  background: ${({ theme }) => theme.colors.primary};
  height: 50px;
  display: flex;
  top:0;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.4);
  z-index: 999;
  opacity: 0.9;
  position: fixed;
  ul {
    list-style: none;
    display: flex;
  }
  #sidemenu-icon {
    display: none;
    @media (max-width: 769px) {
      display: flex;
    }
  }
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
  &:hover{
    background: ${({ theme }) =>
      `-webkit-linear-gradient(100deg, ${theme.colors.upColor_inverted},${theme.colors.downColor_inverted})`};
    background-clip: text;
    -webkit-background-clip: text;
  }
`;

export const StyledButton = styled.a`
  font-size: 24px;
  border: none;
  background: none;
  height: 50px;
  width: 100px;
  padding: 0 35px;
  display: flex;
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
  @media (max-width: 770px) {
    display: none;
  }
`;

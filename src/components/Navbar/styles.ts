import styled from 'styled-components';
import theme from '../../styles/themes/light';

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
  background: ${({ theme }) =>
    `-webkit-linear-gradient(100deg, ${theme.colors.upColor},${theme.colors.downColor})`};
  background-clip: text;
  -webkit-text-fill-color: transparent;
  &:hover {
    background: ${({ theme }) =>
      `-webkit-linear-gradient(100deg, ${theme.colors.upColor_inverted},${theme.colors.downColor_inverted})`};
    background-clip: text;
  }
`;

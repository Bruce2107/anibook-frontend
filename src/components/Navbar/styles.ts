import styled from 'styled-components';

export const StyledNavbar = styled.nav`
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
interface Props {
  readonly visible?: boolean;
}
export const StyledLogo = styled.a<Props>`
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
  /* @media (max-width: 992px) {
    display: ${(props) => (props.visible ? 'inline-block' : 'none')};
    width: 0;
  } */
`;

export const StyledButton = styled.a<Props>`
  font-size: 24px;
  background: transparent;
  border: none;
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
  @media (max-width: 992px) {
    display: ${(props) => (props.visible ? 'inline-block' : 'none')};
    width: 30px;
    padding: 0 20px;
  }
`;

export const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) =>
      theme.title === 'light' ? theme.colors.downColor : theme.colors.upColor};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`;

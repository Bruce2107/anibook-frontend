import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  width: 100vw;
  background: ${({ theme }) => theme.colors.primary};
  height: 50px;
  display: flex;
  top: 0;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.4);
  z-index: 999;
  opacity: 0.9;
  position: fixed;
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
    display: flex;
  }
  #sidemenu-icon {
    display: none;
    svg {
      margin-top: 0;
    }
    @media (max-width: 769px) {
      svg {
        margin-top: 0.5em;
      }
      display: flex;
    }
  }
`;
export const Logo = styled.a`
  padding: 0 20px;
`;

export const StyledButton = styled.button`
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
        ? theme.colors.upColorInverted
        : theme.colors.downColorInverted};
    cursor: pointer;
  }
  svg {
    margin-top: 0.5em;
  }
  @media (max-width: 770px) {
    display: none;
  }
`;

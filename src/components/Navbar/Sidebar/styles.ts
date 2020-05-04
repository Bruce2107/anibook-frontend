import styled from 'styled-components';

type SideNav = {
  visible: boolean;
};
export const Container = styled.nav<SideNav>`
  height: 100vh;
  width: 100vw;
  background: ${({ theme }) => theme.colors.primary};
  opacity: 0.9;
  box-sizing: border-box;
  box-shadow: ${({ visible }) =>
    visible ? '10px 0 10px' : '0 0 0'} rgba(0, 0, 0, 0.4);
  position: fixed;
  display: flex;
  z-index: 999;
  align-items: flex-start;
  justify-content: center;
  top: 50px;
  left: 0;
  ul {
    list-style: none;
    margin-top: 20vh;
  }
  transform: ${({ visible }) =>
    visible ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease;
`;

export const StyledButton = styled.a`
  font-size: 24px;
  border: none;
  background: none;
  height: 50px;
  width: 100%;
  padding: 0 38px;
  display: flex;
  color: ${({ theme }) =>
    theme.title === 'light' ? theme.colors.downColor : theme.colors.upColor};
  svg {
    margin-top: 0.5em;
  }
`;

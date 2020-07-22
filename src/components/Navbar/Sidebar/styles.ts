import styled from 'styled-components';

export type SideNav = {
  visible: boolean;
};
export const Container = styled.div<SideNav>`
  height: 100vh;
  width: 100vw;
  background: ${({ theme }) => theme.colors.primary};
  opacity: 0.9;
  box-sizing: border-box;
  box-shadow: ${({ visible }) => (visible ? '10px 0 10px' : '0 0 0')}
    rgba(0, 0, 0, 0.4);
  position: fixed;
  display: flex;
  z-index: 999;
  align-items: flex-start;
  justify-content: center;
  top: 50px;
  left: 0;
  transform: ${({ visible }) =>
    visible ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease;
`;

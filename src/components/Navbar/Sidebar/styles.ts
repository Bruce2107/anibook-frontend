import styled from 'styled-components';

export type SideNav = {
  visible: boolean;
};
export const Container = styled.div<SideNav>`
  box-shadow: ${({ visible }) => (visible ? '10px 0 10px' : '0 0 0')}
    rgba(0, 0, 0, 0.4);
  transform: ${({ visible }) => {
    if (visible) {
      return 'translateX(0)';
    }
    return 'translateX(-100%)';
  }};
  transition: transform 0.3s ease;
`;

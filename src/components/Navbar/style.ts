import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  > div:first-of-type {
    transition: background-color 500ms ease;
  }
`;

export default Container;

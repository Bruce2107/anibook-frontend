import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 50px;
  > div:first-of-type {
    transition: background-color 500ms ease;
  }
`;

export default Container;

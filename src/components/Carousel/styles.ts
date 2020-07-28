import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  div {
    flex: 1;
    min-width: 50vw;
    transition: opacity 500ms linear, transform 500ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
`;
export const ContainerA = styled.div``;

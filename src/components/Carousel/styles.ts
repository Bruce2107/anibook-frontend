import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  div {
    flex: 1;
    opacity: 0.5;
    transform: scale(0.7);
    min-width: 50vw;
    transition: opacity 500ms linear, transform 500ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
  div.active {
    opacity: 1;
  }
  margin-left: 20vw;
`;
export const ContainerA = styled.div``;

/* eslint-disable */
import styled from 'styled-components';

export const Container = styled.main`
  margin-top: 100px;
  position: relative;
  min-height: 100%;
  overflow: scroll;
  .pagination {
    margin-bottom: 50px;
    display: grid;
    place-items: center;
    grid-gap: 5px;
    grid-template-columns: repeat(5, 1fr);
  }
`;

// TODO: Arrumar alinhamento, usar grid + flex
export const Pagination = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  grid-gap: 5px;
  width: 100%;
  /* grid-template-columns: repeat(5, 1fr); */
`;

export const PaginationButton = styled.button<{ visible: boolean }>`
  width: 40px;
  height: 40px;
  color: ${({ theme }) =>
    theme.title === 'dark'
      ? theme.colors.downColorInverted
      : theme.colors.upColorInverted};
  font-weight: bolder;
  font-size: 1rem;
  line-height: 1rem;
  border: 2px solid #000;
  background-color: ${({ theme }) =>
    theme.title === 'light' ? theme.colors.downColor : theme.colors.upColor};
  cursor: pointer;
  transition: background-color ease 300ms;
  &:hover {
    background-color: transparent;
  }
  display: ${({ visible }) => (visible ? 'block' : 'none')};
`;

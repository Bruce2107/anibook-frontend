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

export const SidedItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 12px;
  padding: 0 32px 32px 0;
`;
type BtnStyle = {
  secondary?: boolean;
};
export const StyledButton = styled.button<BtnStyle>`
  border-radius: 4px;
  height: 48px;
  width: 15%;
  > * {
    font: inherit;
    font-size: calc(8px + 1.5625vw);
  }
  font: inherit;
  background-color: ${({ theme, secondary }) =>
    secondary ? 'transparent' : theme.colors.upColor};
  border: thin solid ${({ theme }) => theme.colors.downColor};
  transition: all ease-in 0.5s;
  &:focus,
  &:hover {
    border-color: ${({ theme }) => theme.colors.upColor};
    background-color: ${({ theme, secondary }) =>
      secondary ? theme.colors.backgroundCard : theme.colors.downColor};
  }
  &:hover {
    cursor: pointer;
  }
`;

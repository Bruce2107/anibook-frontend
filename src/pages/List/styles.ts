/* eslint-disable */
import styled from 'styled-components';

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 20px;
  margin: 50px auto 100px;
`;

export const Container = styled.main`
  margin-top: 100px;
`;

export const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  /* gap: 20px; */
  box-sizing: border-box;
  justify-content: center;
  margin-bottom: 50px;
`;

export const PaginationButton = styled.button<{ visible: boolean }>`
  width: 40px;
  height: 40px;
  padding: 10px 0;
  text-align: center;
  color: ${({ theme }) =>
    theme.title === 'dark'
      ? theme.colors.downColorInverted
      : theme.colors.upColorInverted};
  font-weight: bolder;
  font-size: 16px;
  line-height: 16px;
  border: 2px solid #000;
  background-color: ${({ theme }) =>
    theme.title === 'light' ? theme.colors.downColor : theme.colors.upColor};
  cursor: pointer;
  transition: background-color ease 300ms;
  &:hover {
    background-color: transparent;
  }
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  /* subistitui o gap do pai por causa do Chrome */
  margin: 0 10px;
`;

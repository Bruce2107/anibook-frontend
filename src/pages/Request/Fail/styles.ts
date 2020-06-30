/* eslint-disable */
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex-direction: column;
  padding: 0 10px;
`;

export const Title = styled.h1`
  text-align: center;
  padding: 15px;
  font-weight: bolder;
  background-color: ${({ theme }) => theme.colors.backgroundWithOpacity};
  margin-bottom: 20px;
`;

export const Button = styled.button`
  line-height: 32px;
  font-size: 32px;
  cursor: pointer;
  font-weight: bold;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  border-radius: 5px;
  padding: 10px;
  color: ${({ theme }) =>
    theme.title === 'dark'
      ? theme.colors.downColorInverted
      : theme.colors.upColorInverted};
  background-color: ${({ theme }) =>
    theme.title === 'light' ? theme.colors.downColor : theme.colors.upColor};
  transition: background-color 300ms ease;
  &:hover {
    color: ${({ theme }) =>
      theme.title === 'dark'
        ? theme.colors.upColorInverted
        : theme.colors.downColorInverted};
    background-color: ${({ theme }) =>
      theme.title === 'light' ? theme.colors.upColor : theme.colors.downColor};
  }
`;

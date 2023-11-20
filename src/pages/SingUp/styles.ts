import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  > div {
    width: 50%;
    @media (width < 770px) {
      width: 85%;
    }
  }
`;

export const PasswordFields = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const StyledButton = styled.button`
  border-radius: 4px;
  height: 48px;
  width: 25%;
  > * {
    font: inherit;
    font-size: calc(8px + 1.5625vw);
  }
  font: inherit;
  background-color: ${({ theme }) => theme.colors.upColor};
  border: thin solid ${({ theme }) => theme.colors.downColor};
  transition: all ease-in 0.5s;
  &:focus,
  &:hover {
    border-color: ${({ theme }) => theme.colors.upColor};
    background-color: ${({ theme }) => theme.colors.downColor};
  }
  &:hover {
    cursor: pointer;
  }
`;

export default Container;

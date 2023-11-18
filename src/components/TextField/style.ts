import styled from 'styled-components';

export const StyledInput = styled.input`
  height: 48px;
  line-height: calc(8px + 1.5625vw);
  font-size: calc(8px + 1.5625vw);
  padding: 4px;
  border-radius: 8px;
  width: 100%;
  font: inherit;
  background-color: ${({ theme }) => theme.colors.footer};
  border: thin solid ${({ theme }) => theme.colors.upColor};
  &:focus,
  &:hover {
    border-color: ${({ theme }) => theme.colors.downColor};
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  }
  &:hover {
    cursor: pointer;
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
  box-sizing: border-box;
  height: 100px;
  align-items: flex-start;
  &:focus,
  &:hover {
    > label {
      font-size: 1.25rem;
    }
  }
`;
export default StyledInput;

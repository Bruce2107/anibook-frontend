import styled from 'styled-components';

export const Container = styled.form`
  width: 100%;
  padding: 0 calc(8px + 1.5625vw);
  display: flex;
  gap: 10px;
  justify-content: center;
  > * {
    font: inherit;
    background-color: ${({ theme }) => theme.colors.footer};
    border: thin solid ${({ theme }) => theme.colors.upColor};
    &:focus,
    &:hover {
      border-color: ${({ theme }) => theme.colors.downColor};
    }
    &:hover {
      cursor: pointer;
    }
  }
`;

export const StyledInput = styled.input`
  width: 75%;
  height: 48px;
  line-height: calc(8px + 1.5625vw);
  font-size: calc(8px + 1.5625vw);
  padding: 4px;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
`;

export const StyledCombo = styled.select`
  width: 15%;
  /* height: 48px; */
  /* text-align: center; */
  border-radius: 4px;
  display: inline-block;
  line-height: 1.5em;
  padding: 0.5em 3.5em 0.5em 1em;
  background-image: linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    linear-gradient(to right, #ccc, #ccc);
  background-position: calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 1px 1.5em;
  background-repeat: no-repeat;
  appearance: none;
  /* -webkit-appearance: none;
  -moz-appearance: none; */
  &:focus {
    background-image: linear-gradient(45deg, green 50%, transparent 50%),
      linear-gradient(135deg, transparent 50%, green 50%),
      linear-gradient(to right, #ccc, #ccc);
    background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em,
      calc(100% - 2.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 1px 1.5em;
    background-repeat: no-repeat;
    outline: 0;
  }
`;

export const StyledButton = styled.button`
  width: 10%;
  border-radius: 4px;
  > * {
    font-size: calc(8px + 1.5625vw);
  }
`;

export default StyledInput;

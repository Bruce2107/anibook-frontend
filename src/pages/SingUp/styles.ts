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

export default Container;

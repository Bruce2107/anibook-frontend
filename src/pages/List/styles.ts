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
  gap: 20px;
  box-sizing: border-box;
  justify-content: center;
  margin-bottom: 50px;
  div {
    width: 40px;
    height: 40px;
    padding: 10px;
    background: #fff;
    text-align: center;
  }
`;

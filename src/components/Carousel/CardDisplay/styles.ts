import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0%{
    opacity: 1
  }
  50%{
    opacity: 1
  }
  99%{
    opacity: 0.1
  }
  100%{
    opacity: 0
  }
`;
export const Container = styled.div`
  width: 60vw;
  height: 500px;
  margin-left: 20vw;
  margin-right: 20vw;
  box-shadow: 0 0 8px #000;
  overflow: hidden;
  animation: ${animation} 5s infinite;
  transition: opacity 5s ease-in-out
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  z-index: 1;
  position: relative;
`;

export const Title = styled.a`
  z-index: 2;
  position: relative;
  display: flex;
  bottom: 53px;
  padding: 10px;
  height: 50px;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  font-style: italic;
  text-decoration: none;
  justify-content: center;
  text-align: center;
  &:hover {
    text-decoration: underline;
  }
`;

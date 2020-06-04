import styled from 'styled-components';

export const Container = styled.div`
  height: 500px;
  width: 60vw;
  box-shadow: 0 0 8px #000;
  overflow: hidden;
  &.active {
    opacity: 1;
    transform: scale(1)
  }
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

/* eslint-disable */
import styled, { css } from 'styled-components';

interface ContainerProps {
  responsiveSizes: Array<{
    screen: string;
    height: string;
    width: string;
  }>;
}
export const Container = styled.div<ContainerProps>`
  display: grid;
  place-items: center;
  > div:first-of-type {
    width: 1080px;
    height: auto;
    ${({ responsiveSizes }) =>
      responsiveSizes.map(
        (media) => css`
          @media (max-width: ${media.screen}) {
            height: ${media.height};
            width: ${media.width};
          }
        `
      )}
  }
`;

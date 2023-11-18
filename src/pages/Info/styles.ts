import styled from 'styled-components';
import { StyledCombo } from '../../components/Searchbar/style';

export const Container = styled.main`
  height: calc(100% - 50px);
  display: grid;
  place-items: start center;
  grid-template:
    'i d d'
    'c t t';
  padding: 100px 10% 0;
  /* width: 100%; */
  @media (max-width: 600px) {
    padding: 100px 0 0;
    gap: 24px;
    grid-template:
      'i i i'
      'd d d'
      '. t .'
      '. c .';
  }
`;
export const ImageStyle = styled.div`
  grid-area: i;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DescriptionStyle = styled.aside`
  grid-area: d;
  width: 80%;
`;

export const SelectStyle = styled(StyledCombo)`
  width: 80%;
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
`;

export const TableStyle = styled.table`
  grid-area: t;
  width: 100%;
  /* margin: 0 5%; */
  text-align: left;
  th,
  td {
    padding: 0.5em;
    color: ${({ theme }) => theme.colors.text};
  }
  tbody td {
    background-color: rgba(255, 255, 255, 0);
    transition: all 0.2s linear;
    transition-delay: 0.3s, 0s;
    opacity: 0.8;
  }
  tbody tr:hover td {
    /* background-color: rgba(255, 255, 255, 1); */
    background-color: ${({ theme }) => theme.colors.footer};
    transition-delay: 0s, 0s;
    opacity: 1;
    font-size: 1.2rem;
  }

  td {
    transform-origin: center left;
    transition-property: transform;
    transition-duration: 0.4s;
    transition-timing-function: ease-in-out;
  }
  tr:hover td {
    transform: scale(1.1);
  }
`;

export const Chart = styled.div`
  grid-area: c;
`;

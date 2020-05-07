import React from 'react';

import {
  StyledCard, StyledLayer, StyledImage, StyledTitle,
} from './styles';

interface Props {
  image: string;
  name: string;
}
const Card: React.FC<Props> = ({ image, name }) => (
  <StyledCard>
    <StyledImage src={image} alt={name} />
    <StyledLayer className="layer" />
    <StyledTitle>{name}</StyledTitle>
  </StyledCard>
);

export default Card;

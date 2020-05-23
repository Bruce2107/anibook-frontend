import React from 'react';
import {
  StyledCard, StyledLayer, StyledImage, StyledTitle,
} from './styles';
import imageError from '../../utils/imageError';

interface Props {
  image: string;
  name: string;
}

const Card: React.FC<Props> = ({ image, name }) => (
  <StyledCard>
    <StyledImage src={image} alt={name} onError={imageError} />
    <StyledLayer className="layer" />
    <StyledTitle>{name}</StyledTitle>
  </StyledCard>
);

export default Card;

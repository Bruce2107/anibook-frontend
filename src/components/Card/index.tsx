import React from 'react';
import { Link } from 'react-router-dom';
import { StyledCard, StyledLayer, StyledImage, StyledTitle } from './styles';
import imageError from '../../utils/imageError';
import replaceSpaces from '../../utils/replaceSpaces';

interface Props {
  image: string;
  name: string;
  type: 'animes' | 'mangas';
}

const Card: React.FC<Props> = ({ image, name, type }) => (
  <Link to={`/${type}/${replaceSpaces(name)}`}>
    <StyledCard>
      <StyledImage src={image} alt={name} onError={imageError} aria-hidden />
      <StyledLayer className="layer" />
      <StyledTitle lang="en">{name}</StyledTitle>
    </StyledCard>
  </Link>
);

export default Card;

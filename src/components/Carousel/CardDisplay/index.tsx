import React from 'react';
import { Card } from 'anibook';
import { Link } from 'react-router-dom';
import { Container, Image, Title } from './styles';
import getUrlImage from '../../../utils/getImageUrl';
import imageError from '../../../utils/imageError';
import replaceSpaces from '../../../utils/replaceSpaces';

interface CardProps {
  card: Card;
  active: boolean;
  type: string;
}
const CardDisplay: React.FC<CardProps> = ({ card, active, type }) => (
  <Container className={`${active ? 'active' : ''}`}>
    <Link to={`/${type}/${replaceSpaces(card.name)}`}>
      <Image
        src={`${getUrlImage(card.folder, card.photo)}`}
        alt={card.name}
        onError={imageError}
        aria-hidden
      />
      <Title href="a">{card.name}</Title>
    </Link>
  </Container>
);

export default CardDisplay;

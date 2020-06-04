import React from 'react';
import { Card } from 'anibook';
import { Container, Image, Title } from './styles';
import getUrlImage from '../../../utils/getImageUrl';
import imageError from '../../../utils/imageError';

interface CardProps {
  card: Card;
}
const CardDisplay: React.FC<CardProps> = ({ card }) => (
  <Container>
    <Image
      src={`${getUrlImage(card.folder, card.photo)}`}
      alt={card.name}
      onError={imageError}
      aria-hidden
    />
    <Title href="a">{card.name}</Title>
  </Container>
);

export default CardDisplay;
import React from 'react';
import { Card } from 'anibook';
import { CarouselCard, Text, Image } from 'anibook-ui';
import { Link } from 'react-router-dom';
import { Title } from './styles';
import replaceSpaces from '../../../utils/replaceSpaces';
import getUrlImage from '../../../utils/getImageUrl';

interface CardProps {
  card: Card;
  type: string;
}
const CardDisplay: React.FC<CardProps> = ({ card, type }) => {
  const image = (
    <Image
      alt={card.name}
      src={`${getUrlImage(card.folder, card.photo)}`}
      height="100%"
      width="100%"
      zIndex={1}
    />
  );
  const text = (
    <Title>
      <Text
        text={card.name}
        props={[
          {
            name: 'position',
            value: 'absolute',
          },
          {
            name: 'color',
            value: '#ffffff',
          },
          {
            name: 'text-transform',
            value: 'capitalize',
          },
          {
            name: 'z-index',
            value: '2',
          },
          {
            name: 'font-size',
            value: '1.5rem',
          },
          {
            name: 'font-style',
            value: 'italic',
          },
          {
            name: 'margin',
            value: '0',
          },
          {
            name: 'bottom',
            value: '0',
          },
          {
            name: 'left',
            value: '0',
          },
          {
            name: 'padding',
            value: '10px',
          },
          {
            name: 'width',
            value: '100%',
          },
          {
            name: 'text-align',
            value: 'center',
          },
          {
            name: 'background',
            value: 'rgba(0, 0, 0, 0.5)',
          },
          {
            name: 'font-weight',
            value: 'bolder',
          },
        ]}
      />
    </Title>
  );
  return (
    <Link to={`/${type}/${replaceSpaces(card.name)}`}>
      <CarouselCard
        image={image}
        text={text}
        responsiveSizes={[
          {
            screen: '1080px',
            height: '720px',
            width: 'auto',
          },
          {
            screen: '540px',
            height: '360px',
            width: 'auto',
          },
          {
            screen: '380px',
            height: '300px',
            width: 'auto',
          },
        ]}
      />
    </Link>
  );
};

export default CardDisplay;

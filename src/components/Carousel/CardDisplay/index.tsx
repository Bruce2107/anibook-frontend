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
      src={`${getUrlImage(card.folder as string, card.photo)}`}
      height="100%"
      width="100%"
      zIndex={1}
    />
  );
  const text = (
    <Link to={`/${type}/${replaceSpaces(card.name)}`}>
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
    </Link>
  );
  return (
    <CarouselCard
      image={image}
      text={text}
      responsiveSizes={[
        {
          screen: '1080px',
          height: '450px',
          width: '720px',
        },
        {
          screen: '760px',
          height: '300px',
          width: '480px',
        },
        {
          screen: '540px',
          height: '200px',
          width: '360px',
        },
        {
          screen: '380px',
          height: '150px',
          width: '300px',
        },
      ]}
    />
  );
};

export default CardDisplay;

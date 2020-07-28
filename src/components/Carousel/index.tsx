import React, { useState } from 'react';
import { Card } from 'anibook';
import CardDisplay from './CardDisplay';
import { Container } from './styles';

interface MyCard extends Card {
  type: 'anime' | 'manga';
}

interface CarouselProps {
  data: MyCard[];
}

const Carousel: React.FC<CarouselProps> = ({ data }) => {
  const [cardPos, setCardPos] = useState(2);
  function toggleCard() {
    if (cardPos + 1 >= data.length) setCardPos(0);
    else setCardPos(cardPos + 1);
  }
  setTimeout(() => {
    toggleCard();
  }, 5000);
  return (
    <>
      <Container
        style={{ transform: `translateX(-${cardPos * (300 / data.length)}%)` }}
      >
        {data.map((card) => (
          <CardDisplay key={card.name} card={card} type={card.type} />
        ))}
      </Container>
    </>
  );
};

export default Carousel;

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
        className={`active-card-${cardPos}`}
      >
        {data[0] && (
          <CardDisplay
            card={data[0]}
            active={cardPos === 0}
            type={data[0].type}
          />
        )}
        {data[1] && (
          <CardDisplay
            card={data[1]}
            active={cardPos === 1}
            type={data[1].type}
          />
        )}
        {data[2] && (
          <CardDisplay
            card={data[2]}
            active={cardPos === 2}
            type={data[2].type}
          />
        )}
        {data[3] && (
          <CardDisplay
            card={data[3]}
            active={cardPos === 3}
            type={data[3].type}
          />
        )}
        {data[4] && (
          <CardDisplay
            card={data[4]}
            active={cardPos === 4}
            type={data[4].type}
          />
        )}
        {data[5] && (
          <CardDisplay
            card={data[5]}
            active={cardPos === 5}
            type={data[5].type}
          />
        )}
      </Container>
    </>
  );
};

export default Carousel;

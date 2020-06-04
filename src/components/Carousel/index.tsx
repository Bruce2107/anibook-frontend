import React, { useState } from 'react';
import { Card } from 'anibook';
import CardDisplay from './CardDisplay';
import { Container } from './styles';

interface CarouselProps {
  data: Card[];
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
      <button onClick={toggleCard} type="button">
        oi
      </button>
      <Container
        style={{ transform: `translateX(-${cardPos * (300 / data.length)}%)` }}
        className={`active-card-${cardPos}`}
      >
        {data[0] && <CardDisplay card={data[0]} active={cardPos === 0} />}
        {data[1] && <CardDisplay card={data[1]} active={cardPos === 1} />}
        {data[2] && <CardDisplay card={data[2]} active={cardPos === 2} />}
        {data[3] && <CardDisplay card={data[3]} active={cardPos === 3} />}
        {data[4] && <CardDisplay card={data[4]} active={cardPos === 4} />}
        {data[5] && <CardDisplay card={data[5]} active={cardPos === 5} />}
      </Container>
    </>
  );
};

export default Carousel;

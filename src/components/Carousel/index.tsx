import React, { useState } from 'react';
import { Card } from 'anibook';
import { TypeCard } from '../../constants/Types';
import CardDisplay from './CardDisplay';

interface CarouselProps {
  data: Card[];
}

const Carousel: React.FC<CarouselProps> = ({ data }) => {
  const [cardPos, setCardPos] = useState(0);
  function toggleCard() {
    if (cardPos + 1 >= data.length) setCardPos(0);
    else setCardPos(cardPos + 1);
  }
  setTimeout(() => {
    toggleCard();
  }, 5000);
  return <CardDisplay card={data[cardPos]} />;
};

export default Carousel;

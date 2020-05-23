import React, { useEffect, useState } from 'react';

import { AxiosResponse } from 'axios';
import Navbar from '../../components/Navbar';
import { Cards, Container } from './styles';
import getUrlImage from '../../utils/getImageUrl';
import { TypeCard } from '../../constants/Types';
import api from '../../services/api';
import Card from '../../components/Card';

export default function Home() {
  const [cards, setCards] = useState<Array<TypeCard>>();
  useEffect(() => {
    document.title = 'Home';
    api.get('anime/card/random?limit=3').then((res: AxiosResponse<{ data: Array<TypeCard> }>) => {
      setCards(res.data.data);
    });
  }, []);
  return (
    <>
      <Navbar />
      <Container>
        {cards && (
          <Cards>
            {cards.map((card) => (
              <Card
                key={card.name}
                image={`${getUrlImage(card.folder, card.photo)}`}
                name={card.name}
              />
            ))}
          </Cards>
        )}
      </Container>
    </>
  );
}

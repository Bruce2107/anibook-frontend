import React, { useEffect, useState } from 'react';

import { AxiosResponse } from 'axios';
import { Card as TypeCard } from 'anibook';
import { useHistory } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { Cards, Container } from './styles';
import getUrlImage from '../../utils/getImageUrl';
import api from '../../services/api';
import Card from '../../components/Card';
import setPageTitle from '../../utils/setPageTitle';
import Carousel from '../../components/Carousel';

interface MyTypeCard extends TypeCard {
  type: 'anime' | 'manga';
}

export default function Home() {
  const [cards, setCards] = useState<Array<MyTypeCard>>();
  const [carousel, setCarousel] = useState<Array<MyTypeCard>>();
  const history = useHistory();

  useEffect(() => {
    setPageTitle('Home');
    api
      .get('/mixed/card/random?limit=9')
      .then((res: AxiosResponse<{ data: Array<MyTypeCard> }>) => {
        setCarousel(res.data.data.slice(0, 6));
        setCards(res.data.data.slice(6));
      })
      .catch((error) => {
        if (!error.response) history.push('request/fail');
        else {
          history.push(`/request/fail?status=${error.response.status}`);
        }
      });
  }, [history]);

  return (
    <>
      <Navbar />
      <Container>
        {carousel && <Carousel data={carousel} />}
        {cards && (
          <Cards>
            {cards.map((card) => (
              <Card
                key={card.name}
                type={card.type}
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

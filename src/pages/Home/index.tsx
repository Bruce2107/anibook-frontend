import React, { useEffect, useState } from 'react';

import { AxiosResponse } from 'axios';
import { Card as TypeCard } from 'anibook';
import { useSelector } from 'react-redux';
import Navbar from '../../components/Navbar';
import { Cards, Container } from './styles';
import getUrlImage from '../../utils/getImageUrl';
import api from '../../services/api';
import Card from '../../components/Card';
import setPageTitle from '../../utils/setPageTitle';
import Carousel from '../../components/Carousel';
import { MobileScreen } from '../../constants/Types';

export default function Home() {
  const [cards, setCards] = useState<Array<TypeCard>>();
  const [carousel, setCarousel] = useState<Array<TypeCard>>();
  const isMobile = useSelector((state: MobileScreen) => state.mobileScreen);

  useEffect(() => {
    setPageTitle('Home');
    api
      .get('/animes/card/random?limit=9')
      .then((res: AxiosResponse<{ data: Array<TypeCard> }>) => {
        setCarousel(res.data.data.slice(0, 6));
        setCards(res.data.data.slice(6));
      });
  }, []);


  return (
    <>
      <Navbar />
      <Container>
        {!isMobile && carousel && <Carousel data={carousel} />}
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

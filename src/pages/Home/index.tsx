import React, { useEffect, useState } from 'react';

import { AxiosResponse } from 'axios';
import { useHistory } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import Navbar from '../../components/Navbar';
import { Container } from './styles';
import api from '../../services/api';
import Card from '../../components/Card';
import setPageTitle from '../../utils/setPageTitle';
import Carousel from '../../components/Carousel';
import { Serie } from '../../types/Serie';

export default function Home() {
  const [cards, setCards] = useState<Array<Serie>>();
  const [carousel, setCarousel] = useState<Array<Serie>>();
  const history = useHistory();

  useEffect(() => {
    setPageTitle('Home');
    api
      .get('/graph/series')
      .then((res: AxiosResponse<{ series: Array<Serie> }>) => {
        setCarousel(res.data.series.slice(0, 6));
        setCards(res.data.series.slice(6));
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
          <div className="card-list">
            {cards.map((card) => (
              <Card key={card.name} image={card.cover} name={card.name} />
            ))}
          </div>
        )}
      </Container>
    </>
  );
}

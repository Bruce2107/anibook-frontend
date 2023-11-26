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
import Loading from '../../components/Loading';

export default function Home() {
  const [cards, setCards] = useState<Array<Serie>>();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [carousel, setCarousel] = useState<Array<Serie>>();
  const history = useHistory();

  useEffect(() => {
    setPageTitle('Início');
    setLoading(true);
    api
      .get('/graph/report/home')
      .then((res: AxiosResponse<{ data: Array<Serie> }>) => {
        setCards(res.data.data.slice(0, 3));
        setCarousel(res.data.data.slice(3, 9));
      })
      .catch((error) => {
        if (!error.response) history.push('request/fail');
        else {
          history.push(`/request/fail?status=${error.response.status}`);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [history]);

  return (
    <>
      <Navbar />
      <Container>
        {isLoading && <Loading />}
        {!isLoading && carousel && <Carousel data={carousel} />}
        {!isLoading && cards && (
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

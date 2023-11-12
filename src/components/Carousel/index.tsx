import React from 'react';
import Slider, { Settings } from 'react-slick';
import CardDisplay from './CardDisplay';
import { Container } from './styles';
import { Serie } from '../../types/Serie';

interface CarouselProps {
  data: Serie[];
}

const Carousel: React.FC<CarouselProps> = ({ data }) => {
  const settings: Settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    arrows: false,
    accessibility: true,
    lazyLoad: 'ondemand',
    swipeToSlide: true,
  };
  return (
    <>
      <Container
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
      >
        <Slider {...settings}>
          {data.map((card) => (
            <CardDisplay key={card.name} card={card} />
          ))}
        </Slider>
      </Container>
    </>
  );
};

export default Carousel;

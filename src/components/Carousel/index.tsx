import React from 'react';
import { Card } from 'anibook';
import Slider, { Settings } from 'react-slick';
import CardDisplay from './CardDisplay';
import { Container } from './styles';

interface MyCard extends Card {
  type: 'anime' | 'manga';
}

interface CarouselProps {
  data: MyCard[];
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
    cssEase: 'linear',
    fade: true,
  };
  return (
    <>
      <Container>
        <Slider {...settings}>
          {data.map((card) => (
            <CardDisplay key={card.name} card={card} type={card.type} />
            // <h3 key={card.name}>{card.name}</h3>
          ))}
        </Slider>
      </Container>
    </>
  );
};

export default Carousel;

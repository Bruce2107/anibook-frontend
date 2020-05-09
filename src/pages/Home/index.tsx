import React, { useEffect } from 'react';

import Navbar from '../../components/Navbar';
import Card from '../../components/Card';
import { Cards, Container } from './styles';
import { randomObjectWithImages } from '../../utils/cardImage';
import getDomain from '../../utils/getDomain';

export default function Home() {
  const cards = randomObjectWithImages(3);
  useEffect(() => {
    document.title = 'Home';
  }, []);
  return (
    <>
      <Navbar />
      <Container>
        <Cards>
          {cards.map((image) => (
            <Card
              key={image.name}
              image={`${getDomain(image.name)}${image.filename}${
                image.extension
              }`}
              name={image.displayName}
            />
          ))}
        </Cards>
      </Container>
    </>
  );
}

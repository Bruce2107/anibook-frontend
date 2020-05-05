import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Card from '../../components/Card';

import { Cards } from './styles';
import {
  objectWithSpecificImage,
  randomObjectWithImages,
} from '../../utils/cardImage';
import getDomain from '../../utils/getDomain';
export default function Home() {
  const cards = randomObjectWithImages(3);
  useEffect(() => {
    document.title = 'Home';
  }, []);
  return (
    <>
      <Navbar />
      <Cards>
        {cards.map((image) => (
          <Card
            image={`${getDomain(image.name)}${image.filename}${
              image.extension
            }`}
            name={image.displayName}
          />
        ))}
      </Cards>
    </>
  );
}

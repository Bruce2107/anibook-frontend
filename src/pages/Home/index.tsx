import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Card from '../../components/Card';

import { Cards } from './styles';

export default function Home() {
  useEffect(() => {
    document.title = 'Home';
  }, []);
  return (
    <>
      <Navbar />
      <Cards>
        <Card image="https://static.zerochan.net/Seitokai.Yakuindomo.full.920804.jpg" name="seitokai yakuindomo"/>
        <Card image="https://static.zerochan.net/Seitokai.Yakuindomo.full.920804.jpg" name="seitokai yakuindomo"/>
        <Card image="https://static.zerochan.net/Seitokai.Yakuindomo.full.920804.jpg" name="seitokai yakuindomo"/>
      </Cards>
    </>
  );
}

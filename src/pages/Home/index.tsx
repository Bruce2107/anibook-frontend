import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';

// import { Container } from './styles';

export default function Home() {
  useEffect(()=>{
    document.title = 'Home'
  },[])
  return <Navbar />;
}

import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const Info: FC = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <>
      <Navbar />
      <div>{name}</div>
    </>
  );
};

export default Info;

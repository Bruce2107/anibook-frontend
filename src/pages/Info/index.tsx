import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const Info: FC = () => {
  const { name }: { name: string } = useParams();

  return (
    <>
      <Navbar />
      <div>{name}</div>
    </>
  );
};

export default Info;

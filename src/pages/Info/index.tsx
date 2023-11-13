import React, { FC, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import Navbar from '../../components/Navbar';
import api from '../../services/api';
import { Serie } from '../../types/Serie';
import setPageTitle from '../../utils/setPageTitle';
import { capitalize, replaceUnderscore } from '../../utils/string';
import Loading from '../../components/Loading';
import { Container } from './styles';

const Info: FC = () => {
  const { name } = useParams<{ name: string }>();
  const normalizedName = replaceUnderscore(name);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [card, setCard] = useState<Serie>();
  const history = useHistory();

  useEffect(() => {
    setPageTitle(capitalize(normalizedName));
    setLoading(true);
    api
      .get(`/graph/serie/${normalizedName}`)
      .then((res: AxiosResponse<{ serie: Array<Serie> }>) => {
        setCard(res.data.serie[0]);
      })
      .catch((error) => {
        if (!error.response.status) history.push('request/fail');
        else {
          history.push(`/request/fail?status=${error.response.status}`);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [history, normalizedName]);
  return (
    <>
      <Navbar />
      {isLoading && <Loading />}
      {!isLoading && <Container />}
    </>
  );
};

export default Info;

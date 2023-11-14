import React, { FC, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import Navbar from '../../components/Navbar';
import api from '../../services/api';
import { Details, Serie } from '../../types/Serie';
import setPageTitle from '../../utils/setPageTitle';
import { capitalize, replaceUnderscore } from '../../utils/string';
import Loading from '../../components/Loading';
import { Container } from './styles';

const Info: FC = () => {
  const { name } = useParams<{ name: string }>();
  const normalizedName = replaceUnderscore(name);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [card, setCard] = useState<Details>();
  const history = useHistory();

  useEffect(() => {
    setPageTitle(capitalize(normalizedName));
    setLoading(true);
    api
      .get(`/graph/report/details/${normalizedName}`)
      .then((res: AxiosResponse<{ data: Array<Details> }>) => {
        setCard(res.data.data[0]);
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
      {!isLoading && (
        <Container>
          <p>{card?.authors}</p>
          <p>{card?.comment}</p>
          <p>{card?.cover}</p>
          <p>{card?.idStudio}</p>
          <p>{card?.musics}</p>
          <p>{card?.numberOfEpisodes}</p>
          <p>{card?.name}</p>
          <p>{card?.status}</p>
          <p>{card?.streaming}</p>
          <p>{card?.synopsis}</p>
          <p>{card?.userStatus}</p>
          <p>{card?.detailsCounter.plan_to_watch}</p>
        </Container>
      )}
    </>
  );
};

export default Info;

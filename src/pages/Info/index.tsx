import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import { Text, Image } from 'anibook-ui';
import Navbar from '../../components/Navbar';
import api from '../../services/api';
import { Details } from '../../types/Serie';
import setPageTitle from '../../utils/setPageTitle';
import { capitalize, replaceUnderscore } from '../../utils/string';
import Loading from '../../components/Loading';
import { Chart, Container, DescriptionStyle, ImageStyle, SelectStyle, TableStyle } from './styles';
import { getSerieStatus, getUserStatus, selectStatus } from '../../utils/getStatus';
import CustomChart from '../../components/CustomChart';

const Info: FC = () => {
  const { name } = useParams<{ name: string }>();
  const normalizedName = replaceUnderscore(name);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [card, setCard] = useState<Details>();
  const selectRef = useRef<HTMLSelectElement>(null);
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

  const selectChange = useCallback(() => {
    console.log(selectRef.current?.value);
  }, [selectRef]);
  return (
    <>
      <Navbar />
      {isLoading && <Loading />}
      {!isLoading && card && (
        <Container>
          <ImageStyle>
            <Image
              alt={card.name}
              src={card.cover}
              height="170px"
              margin="0 0 15px"
              width="302px"
              shadow="0 10px 20px rgba(0, 0, 0, 0.4)"
              // transform="scale(1.1)"
              transition="1s"
              zIndex={2}
            />
            <SelectStyle ref={selectRef} onChange={selectChange}>
              <option value="null">Selecione um status</option>
              {selectStatus.map((i) => <option value={i}>{getUserStatus(i)}</option>)}
            </SelectStyle>
          </ImageStyle>
          <DescriptionStyle>
            <Text
              text={card.name}
              props={[
                { name: 'text-transform', value: 'capitalize' },
                { name: 'font-size', value: '1.25rem' },
                { name: 'font-weight', value: 'bold' }
              ]}
              lang="en"
            />
            <p>
              {card.synopsis}
            </p>
          </DescriptionStyle>
          <TableStyle>
            <tbody>
              <tr>
                <td>Diretores:</td>
                <td>{card.authors.join(', ')}</td>
              </tr>
              <tr>
                <td>Quantidade de episódios:</td>
                <td>{card.numberOfEpisodes}</td>
              </tr>
              <tr>
                <td>Status:</td>
                <td>{getSerieStatus(card.status)}</td>
              </tr>
              <tr>
                <td>Onde assistir:</td>
                <td>{card.streaming.join(', ')}</td>
              </tr>
            </tbody>
          </TableStyle>
          <Chart>
            <CustomChart width={250} height={250} data={card.detailsCounter} />
          </Chart>
        </Container>
      )}
    </>
  );
};

export default Info;

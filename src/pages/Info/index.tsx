import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import { Text, Image } from 'anibook-ui';
import { ToastContainer } from 'react-toastify';
import Navbar from '../../components/Navbar';
import api from '../../services/api';
import { Details } from '../../types/Serie';
import setPageTitle from '../../utils/setPageTitle';
import { capitalize, replaceUnderscore } from '../../utils/string';
import Loading from '../../components/Loading';
import { Chart, Container, DescriptionStyle, ImageStyle, SelectStyle, TableStyle } from './styles';
import { getSerieStatus, getUserStatus, selectStatus } from '../../utils/getStatus';
import CustomChart from '../../components/CustomChart';
import 'react-toastify/dist/ReactToastify.css';
import showToast from '../../utils/Toast';
import { useLogin } from '../../hooks/login';

const Info: FC = () => {
  const { name } = useParams<{ name: string }>();
  const normalizedName = replaceUnderscore(name);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [card, setCard] = useState<Details>();
  const selectRef = useRef<HTMLSelectElement>(null);
  const { user } = useLogin();
  const history = useHistory();

  useEffect(() => {
    setPageTitle(capitalize(normalizedName));
    setLoading(true);
    api
      .get(`/graph/report/details/${normalizedName}?user=${user.name}`)
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
  }, [history, normalizedName, user]);

  const selectChange = useCallback(async (): Promise<boolean> => {
    if (selectRef.current?.value === null
      || selectRef.current?.value === 'default') {
      return false;
    }
    if (!user.name) {
      history.replace(`/login?origin=details/${card?.name}`);
      return false;
    }
    try {
      const res = await api.patch('/graph/user/status/patch',
        {
          username: user.name,
          serie: card?.name,
          value: selectRef.current?.value
        });
      if (res.status === 204) {
        showToast('success', 'Status atualizado com sucesso');
      }
    } catch (error) {
      showToast('error', 'Não foi possível atualizar o registro');
    }
    return true;
  }, [selectRef, card, user, history]);
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
              {selectStatus.map((i) => (
                <option value={i} selected={i === card.userStatus}>
                  {getUserStatus(i)}
                </option>
              ))}
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
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </Container>
      )}
    </>
  );
};

export default Info;

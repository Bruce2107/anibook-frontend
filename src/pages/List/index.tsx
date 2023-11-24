import React, { useCallback, useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { useHistory } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from '../../components/Navbar';
import setPageTitle from '../../utils/setPageTitle';
import api from '../../services/api';
import Card from '../../components/Card';
import { Container, Pagination, PaginationButton } from './styles';
import SearchBar, { RequestParam } from '../../components/Searchbar';
import { Serie } from '../../types/Serie';
import Loading from '../../components/Loading';
import 'react-toastify/dist/ReactToastify.css';
import showToast from '../../utils/Toast';
import useQuery from '../../utils/useQuery';
import { ListOptions } from '../../utils/search';

interface Props {
  pageName: string;
  limitPerPage: number;
}

function arrayPages(pages: number) {
  const array: Array<number> = [];
  for (let i = 0; i < pages; i += 1) {
    array.push(i + 1);
  }
  return array;
}

export default function List({ pageName, limitPerPage }: Props) {
  const [cards, setCards] = useState<Array<Serie>>();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [hasSearch, setSearch] = useState<boolean>(false);
  const [totalRows, setTotalRows] = useState<number>(0);
  const [minPosition, setMinPosition] = useState<number>(0);
  const [maxPosition, setMaxPosition] = useState<number>(minPosition + 6);
  const query = useQuery();
  const page = query.get('page') || '1';
  const history = useHistory();
  const pages = arrayPages(Math.ceil(totalRows / limitPerPage));

  useEffect(() => {
    setPageTitle(pageName);
    setLoading(true);
    api
      .get('/graph/series')
      .then((res: AxiosResponse<{ series: Array<Serie>; rows: number }>) => {
        setCards(res.data.series);
        setTotalRows(res.data.rows);
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
  }, [pageName, history]);

  useEffect(() => {
    setMinPosition(((Number(page) || 1) - 1) * limitPerPage);
    setMaxPosition((Number(page) || 1) * limitPerPage);
  }, [page, limitPerPage]);

  useEffect(() => {
    if ((Number(page) > pages[pages.length - 1]
      || Number(page) < pages[0])
      && !hasSearch) {
      history.push('/notfound?type=page&ref=search');
    }
  }, [page, pages, history, hasSearch]);

  const changePage = (num: number) => {
    history.push(`/search?page=${num}`);
  };

  const search = useCallback(
    async ({ filter, searchText }: RequestParam) => {
      try {
        setLoading(true);
        setSearch(true);
        const res = await api.get<{ series: Array<Serie>; rows: number }>(
          `/graph/series/${searchText}?filter=${filter}`
        );
        setCards(res.data.series);
        setTotalRows(res.data.rows);
        if (res.data.rows === 0) {
          showToast('info', 'Nenhum registro encontrado');
        }
        history.replace('/search?page=1');
      } catch (error: any) {
        if (!error.response.status) history.push('request/fail');
        else {
          history.push(`/request/fail?status=${error.response.status}`);
        }
      } finally {
        setLoading(false);
      }
    },
    [history]
  );

  return (
    <>
      <Navbar />
      <Container>
        <SearchBar requestFunc={search} filterOptions={ListOptions} />
        {cards && !isLoading && (
          <div className="card-list">
            {cards.slice(minPosition, maxPosition).map((card) => (
              <Card key={card.name} image={card.cover} name={card.name} />
            ))}
          </div>
        )}
        {isLoading && <Loading />}
        {totalRows > limitPerPage && !isLoading && (
          <Pagination>
            {pages.map((num: number) => (
              <PaginationButton
                key={num}
                onClick={() => changePage(num)}
                visible={
                  num >= Number(page || 1) - 2 && num <= Number(page || 1) + 2
                }
              >
                {num}
              </PaginationButton>
            ))}
          </Pagination>
        )}
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
    </>
  );
}

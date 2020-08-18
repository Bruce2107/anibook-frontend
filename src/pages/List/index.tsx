import React, { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { Card as TypeCard } from 'anibook';
import { useParams, useHistory } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import setPageTitle from '../../utils/setPageTitle';
import api from '../../services/api';
import Card from '../../components/Card';
import getUrlImage from '../../utils/getImageUrl';
import { Container, Pagination, PaginationButton } from './styles';

interface Props {
  pageName: string;
  type: 'anime' | 'manga';
  limitPerPage: number;
}

function arrayPages(pages: number) {
  const array: Array<number> = [];
  for (let i = 0; i < pages; i += 1) {
    array.push(i + 1);
  }
  return array;
}

export default function List({ pageName, type, limitPerPage }: Props) {
  const [cards, setCards] = useState<Array<TypeCard>>();
  const [totalRows, setTotalRows] = useState<number>(0);
  const [minPosition, setMinPosition] = useState<number>(0);
  const [maxPosition, setMaxPosition] = useState<number>(minPosition + 6);
  const { page } = useParams();
  const history = useHistory();
  const pages = arrayPages(Math.ceil(totalRows / limitPerPage));

  useEffect(() => {
    setPageTitle(pageName);
    api
      .get(`/${type}s/card/sort/name`)
      .then((res: AxiosResponse<{ data: Array<TypeCard>; rows: number }>) => {
        setCards(res.data.data);
        setTotalRows(res.data.rows);
      })
      .catch((error) => {
        if (!error.response.status) history.push('request/fail');
        else {
          history.push(`/request/fail?status=${error.response.status}`);
        }
      });
  }, [pageName, type, history]);

  useEffect(() => {
    setMinPosition(((page || 1) - 1) * limitPerPage);
    setMaxPosition((page || 1) * limitPerPage);
  }, [page, limitPerPage]);

  useEffect(() => {
    if (Number(page) > pages[pages.length - 1] || Number(page) < pages[0]) {
      history.push(`/notfound?type=page&ref=list/${type}s`);
    }
  }, [page, pages, history, type]);

  const changePage = (num: number) => {
    history.push(`/list/${type}s/${num}`);
  };

  return (
    <>
      <Navbar />
      <Container>
        {cards && (
          <div className="card-list">
            {cards.slice(minPosition, maxPosition).map((card) => (
              <Card
                key={card.name}
                type={type}
                image={`${getUrlImage(card.folder, card.photo)}`}
                name={card.name}
              />
            ))}
          </div>
        )}
        {totalRows > 0 && (
          <div className="pagination">
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
          </div>
        )}
      </Container>
    </>
  );
}

import React, { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { Card as TypeCard } from 'anibook';
import { useParams, useHistory } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import setPageTitle from '../../utils/setPageTitle';
import api from '../../services/api';
import Card from '../../components/Card';
import getUrlImage from '../../utils/getImageUrl';
import { Container, Cards, Pagination, PaginationButton } from './styles';

interface Props {
  pageName: string;
  type: string;
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
      .get(`/${type}/card/sort?order=name`)
      .then((res: AxiosResponse<{ data: Array<TypeCard>; rows: number }>) => {
        setCards(res.data.data);
        setTotalRows(res.data.rows);
      })
      .catch((error) =>
        history.push(
          `/request/fail?status=${error.response.status}`
        )
      );
  }, [pageName, type, history]);

  useEffect(() => {
    setMinPosition(((page || 1) - 1) * limitPerPage);
    setMaxPosition((page || 1) * limitPerPage);
  }, [page, limitPerPage]);

  useEffect(() => {
    if (Number(page) > pages[pages.length - 1] || Number(page) < pages[0]) {
      history.push(`/notfound?type=page&ref=list/${type}`);
    }
  }, [page, pages, history, type]);

  const changePage = (num: number) => {
    history.push(`/list/${type}/${num}`);
  };
  return (
    <>
      <Navbar />
      <Container>
        {cards && (
          <Cards>
            {cards.slice(minPosition, maxPosition).map((card) => (
              <Card
                key={card.name}
                image={`${getUrlImage(card.folder, card.photo)}`}
                name={card.name}
              />
            ))}
          </Cards>
        )}
        {totalRows > 0 && (
          <Pagination>
            {pages.map((num: number) => (
              <PaginationButton
                key={num}
                onClick={() => changePage(num)}
                visible={
                  num >= Number(page || 1) - 3 && num <= Number(page || 1) + 3
                }
              >
                {num}
              </PaginationButton>
            ))}
          </Pagination>
        )}
      </Container>
    </>
  );
}

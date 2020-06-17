import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AxiosResponse } from 'axios';
import { Card as TypeCard } from 'anibook';
import Navbar from '../../components/Navbar';
import { Container, Cards, Pagination } from './styles';
import setPageTitle from '../../utils/setPageTitle';
import api from '../../services/api';
import Card from '../../components/Card';
import getUrlImage from '../../utils/getImageUrl';
import { PaginationReduce } from '../../constants/Types';
import TogglePage from '../../redux/actions/Pagination';

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

  const dispatch = useDispatch();
  const currentPage = useSelector(
    (state: PaginationReduce) => state.pagination.page,
  );

  const changePage = (page: number) => {
    dispatch(TogglePage(page));
  };

  useEffect(() => {
    setPageTitle(pageName);
    api
      .get(`/${type}/card/sort?order=name`)
      .then((res: AxiosResponse<{ data: Array<TypeCard>; rows: number }>) => {
        setCards(res.data.data);
        setTotalRows(res.data.rows);
      });
  }, [pageName, type]);

  useEffect(() => {
    setMinPosition((currentPage - 1) * limitPerPage);
    setMaxPosition(currentPage * limitPerPage);
  }, [currentPage, limitPerPage]);

  const pages = arrayPages(Math.ceil(totalRows / limitPerPage));
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
            {pages.map((num) => (
              <div
                key={num}
                onClick={() => changePage(num)}
                role="link"
                tabIndex={0}
              >
                {num}
              </div>
            ))}
          </Pagination>
        )}
      </Container>
    </>
  );
}

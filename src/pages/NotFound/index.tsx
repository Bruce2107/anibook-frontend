import React from 'react';
import { Link } from 'react-router-dom';
import { Title, Button, Container } from './styles';
import useQuery from '../../utils/useQuery';

interface GoTo {
  message: string;
  local: string;
  path: string;
}

function getMessage(type: string | null, lastPage: string | null): GoTo {
  if (!type) {
    return {
      message: 'parece que vc se perdeu nesse monte de páginas',
      local: 'início',
      path: '/',
    };
  }
  switch (type as string) {
    case 'page': {
      return {
        message:
          'parece que vc errou o índice das páginas melhor voltar para o início da lista',
        local: `${lastPage && lastPage.split('/')[1]}`,
        path: lastPage as string,
      };
    }
    default: {
      return {
        message:
          'calma lá meu parceiro, que tal tentar voltar ao início e escolher um página?',
        local: 'início',
        path: '/',
      };
    }
  }
}

export default function NotFound() {
  const query = useQuery();
  const message = getMessage(query.get('type'), query.get('ref'));
  return (
    <>
      <Container>
        <Title>{message.message}</Title>
        <Link to={message.path}>
          <Button>{message.local}</Button>
        </Link>
      </Container>
    </>
  );
}

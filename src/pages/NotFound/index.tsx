import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Title, Button, Container } from './styles';

interface GoTo {
  message: string;
  local: string;
  path: string;
}
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function getMessage(type: string | null, lastPage: string | null): GoTo {
  if (!type) {
    return {
      message: 'parece que vc se perdeu nesse monte de páginas',
      local: 'inicio',
      path: '/',
    };
  }
  switch (type as string) {
    case 'page': {
      return {
        message:
          'parece que vc errou o indice das páginas melhor voltar para o inicio da lista',
        local: `${lastPage && lastPage.split('/')[1]}`,
        path: lastPage as string,
      };
    }
    default: {
      return {
        message:
          'calma lá meu parceiro, que tal tentar voltar ao inicio e escolher um página?',
        local: 'inicio',
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

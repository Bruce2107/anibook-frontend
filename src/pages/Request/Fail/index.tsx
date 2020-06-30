import React from 'react';
import { useHistory } from 'react-router-dom';
import useQuery from '../../../utils/useQuery';
import { Container, Button, Title } from './styles';
import openLink from '../../../utils/openLink';

interface GoTo {
  message: string;
  button: {
    name: string;
    link: string;
  };
}

function getMessage(code: number): GoTo {
  switch (code) {
    case 400: {
      return {
        message:
          'me parece que estamos tendo um problema no nosso servidor. Se possível reporte o problema em nossa dm',
        button: {
          link: 'https://twitter.com/AniBookOficial',
          name: 'Twitter',
        },
      };
    }
    case 404: {
      return {
        message: 'opa, pelo jeito isso não existe, melhor voltar o início',
        button: {
          link: '/',
          name: 'início',
        },
      };
    }
    default: {
      return {
        message:
          'Parece que estamos tendo um problema no nosso servidor. Se possível reporte o problema em nossa dm',
        button: {
          link: 'https://twitter.com/AniBookOficial',
          name: 'Twitter',
        },
      };
    }
  }
}

export default function RequestFail() {
  const query = useQuery();
  const message = getMessage(Number(query.get('status')) || 400);
  const history = useHistory();
  const goTo = (link: string) => {
    if (link.includes('https')) {
      openLink(link);
    } else {
      history.push(link);
    }
  };
  return (
    <>
      <Container>
        <Title>{message.message}</Title>
        <Button onClick={() => goTo(message.button.link)}>
          {message.button.name}
        </Button>
      </Container>
    </>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image, Text } from 'anibook-ui';
import { useTheme } from 'styled-components';
import { StyledTitle } from './styles';
import replaceSpaces from '../../utils/replaceSpaces';

interface Props {
  image: string;
  name: string;
  // type: Serie;
}

const MyCard: React.FC<Props> = ({ image, name }) => {
  const theme = useTheme();

  const imageComponent = (
    <Image
      alt={name}
      src={image}
      height="170px"
      margin="0 0 15px"
      width="302px"
      shadow="0 10px 20px rgba(0, 0, 0, 0.4)"
      transform="scale(1.1)"
      transition="1s"
      zIndex={2}
    />
  );

  const textComponent = (
    <StyledTitle>
      <Text
        text={name}
        props={[
          { name: 'position', value: 'relative' },
          { name: 'color', value: '#ffffff' },
          { name: 'text-transform', value: 'capitalize' },
          { name: 'z-index', value: '2' },
          { name: 'font-size', value: '1.25rem' },
          { name: 'margin', value: '0' },
        ]}
        lang="en"
      />
    </StyledTitle>
  );
  return (
    <Link to={`/${replaceSpaces(name)}`}>
      <Card
        backgroundColor={theme.colors.backgroundCard}
        downColorLayer={theme.colors.downColor}
        upColorLayer={theme.colors.upColor}
        image={imageComponent}
        text={textComponent}
      />
    </Link>
  );
};

export default MyCard;

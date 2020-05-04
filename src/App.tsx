import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

import GlobalStyle from './styles/Global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import { Theme } from './constants/Types';
import Home from './pages/Home';

const App: React.FC = () => {
  const theme = useSelector((state: Theme) => state.theme.darkMode);
  return (
    <ThemeProvider theme={!theme ? light : dark}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
};

export default App;

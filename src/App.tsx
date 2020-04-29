import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

import GlobalStyle from './styles/Global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import { Theme } from './constants/Types';
import Home from './pages/Home';

const App: React.FC = () => {
  const tema = useSelector((state: Theme) => state.theme.darkMode);
  useEffect(() => {
    
  }, []);
  return (
    <ThemeProvider theme={!tema ? light : dark}>
      <GlobalStyle />
      {/* <Navbar /> */}
      <Home />
    </ThemeProvider>
  );
};

export default App;

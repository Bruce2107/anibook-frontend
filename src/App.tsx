import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyle from './styles/Global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

import usePersistedState from './utils/usePersistedState';
import Navbar from './components/Navbar';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const toggleTheme = () => setTheme(theme.title === 'light' ? dark : light);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <>
        <Navbar toggleTheme={toggleTheme} />
      </>
    </ThemeProvider>
  );
}

export default App;

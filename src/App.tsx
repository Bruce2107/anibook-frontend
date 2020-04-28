import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyle from './styles/Global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

import usePersistedState from './utils/usePersistedState';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const toggleTheme = () => setTheme(theme.title === 'light' ? dark : light);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <>
        <button onClick={toggleTheme}>dark</button>
      </>
    </ThemeProvider>
  );
}

export default App;

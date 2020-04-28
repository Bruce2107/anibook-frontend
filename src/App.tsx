import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/Global';
import ligth from './styles/themes/light';
import dark from './styles/themes/dark';
function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <h1>Oi</h1>
    </ThemeProvider>
  );
}

export default App;

import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useSwipeable } from 'react-swipeable';
import { useRecoilState } from 'recoil';
import GlobalStyle from './styles/Global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import createAndRemoveSquare from './utils/SquareMouseFollowing';
import Routes from './routes';
import { useDarkMode } from './hooks/theme';
import sidebar from './recoil/atoms/sidebar';

const App: React.FC = () => {
  useEffect(() => {
    document.addEventListener('mousemove', (event: MouseEvent) => {
      createAndRemoveSquare(event);
    });
  }, []);

  const [, setSidebarState] = useRecoilState(sidebar);

  const swipe = useSwipeable({
    onSwipedLeft: (_) => setSidebarState(false),
    onSwipedRight: (_) => setSidebarState(true),
  });

  const { theme } = useDarkMode();
  const themes = {
    light,
    dark,
  };
  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <div {...swipe}>
        <Routes />
      </div>
    </ThemeProvider>
  );
};

export default App;

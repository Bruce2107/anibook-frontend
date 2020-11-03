import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { useSwipeable } from 'react-swipeable';
import GlobalStyle from './styles/Global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import { Sidebar } from './constants/Types';
import createAndRemoveSquare from './utils/SquareMouseFollowing';
import ToggleSidebar from './redux/actions/Sidebar';
import Routes from './routes';
import { useDarkMode } from './hooks/theme';

const App: React.FC = () => {
  useEffect(() => {
    document.addEventListener('mousemove', (event: MouseEvent) => {
      createAndRemoveSquare(event);
    });
  }, []);

  const isOpen = useSelector((state: Sidebar) => state.sidebar.isOpen);
  const dispacth = useDispatch();

  const closeSideBar = () => {
    if (isOpen) dispacth(ToggleSidebar());
  };
  const openSideBar = () => {
    if (!isOpen) dispacth(ToggleSidebar());
  };

  const swipe = useSwipeable({
    onSwipedLeft: (_) => closeSideBar(),
    onSwipedRight: (_) => openSideBar(),
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

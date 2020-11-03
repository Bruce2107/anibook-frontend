import { useRecoilState } from 'recoil';
import atomTheme, { ThemeProps } from '../recoil/atoms/theme';

export interface DarkMode {
  theme: ThemeProps;
  setTheme: (theme: ThemeProps) => void;
}

export function useDarkMode(): DarkMode {
  const [theme, setTheme] = useRecoilState(atomTheme);

  const saveTheme = (chosenTheme: ThemeProps) => {
    setTheme(chosenTheme);
    window.localStorage.setItem('theme', chosenTheme);
  };

  const toggleTheme = () => {
    saveTheme(theme === 'light' ? 'dark' : 'light');
  };

  return { theme, setTheme: toggleTheme };
}

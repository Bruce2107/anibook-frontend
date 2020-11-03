import { atom } from 'recoil';

export type ThemeProps = 'light' | 'dark';

let defaultTheme: ThemeProps = 'light';

if (typeof window !== 'undefined') {
  const savedTheme = window.localStorage.getItem('theme');
  if (savedTheme) {
    defaultTheme = savedTheme as ThemeProps;
  } else {
    defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }
}

export default atom({
  key: 'theme',
  default: defaultTheme,
});

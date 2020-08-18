import { DefaultTheme } from 'styled-components';

export function IconStyle(theme: DefaultTheme) {
  return {
    backgroundHover: '#ffea',
    color:
      theme.title === 'light' ? theme.colors.downColor : theme.colors.upColor,
    colorHover:
      theme.title === 'light'
        ? theme.colors.upColorInverted
        : theme.colors.downColorInverted,
    width: '100px',
  };
}

export default IconStyle;

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      background: string;
      backgroundWithOpacity: string;
      backgroundCard: string;
      text: string;
      footer: string;
      black: string;
      upColor: string;
      upColorInverted: string;
      downColor: string;
      downColorInverted: string;
    };
  }
}

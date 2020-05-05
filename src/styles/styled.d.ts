import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      background: string;
      background_card: string;
      text: string;
      footer: string;
      black: string;
      upColor: string;
      upColor_inverted: string;
      downColor: string;
      downColor_inverted: string;
    };
  }
}

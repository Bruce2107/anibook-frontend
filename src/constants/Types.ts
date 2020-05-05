export interface Action {
  type: string;
}

export interface ThemeState {
  darkMode: boolean;
}

export interface Theme {
  theme: {
    darkMode: boolean;
  };
}

export interface Image {
  displayname?: string;
  filename: string;
  extension: string;
}

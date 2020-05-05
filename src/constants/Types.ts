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
  filename: string;
  extension: string;
}

export interface ImageCard extends Image{
  displayName: string;
  name: string;
}

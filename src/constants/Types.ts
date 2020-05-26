export interface Action {
  type: string;
}

export interface ThemeState {
  darkMode: boolean;
}

export interface SidebarState {
  isOpen: boolean;
}

export interface Theme {
  theme: {
    darkMode: boolean;
  };
}
export interface Sidebar {
  sidebar: {
    isOpen: boolean;
  };
}
export type MobileScreen = {
  mobileScreen: boolean;
};

export interface Image {
  filename: string;
  extension: string;
}

export interface ImageCard extends Image {
  displayName: string;
  name: string;
}

export interface Data {
  folder: string;
  name: string;
  photo: string;
  images: Array<string>;
  synopsis: string;
  comment: string;
}

export type TypeCard = Pick<Data, 'folder' | 'name' | 'photo'>;

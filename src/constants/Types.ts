export interface Action {
  type: string;
}

export interface ThemeState {
  darkMode: boolean;
}

export interface SidebarState {
  isOpen: boolean;
}
export interface PaginationState {
  page: number;
}
export interface PaginationReduce {
  pagination: {
    page: number;
  };
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

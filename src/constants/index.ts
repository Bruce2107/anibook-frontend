import dotenv from 'dotenv';

dotenv.config();
export const TOGGLE_THEME = 'TOGGLE_THEME';
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

export const Backend = {
  URL_BASE: process.env.REACT_APP_API_URL,
  IMAGES: '/image',
};

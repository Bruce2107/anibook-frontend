import { Backend } from '../constants';

export function getImageAPI() {
  return `${Backend.URL_BASE}${Backend.IMAGES}/background`;
}

export const image = {};

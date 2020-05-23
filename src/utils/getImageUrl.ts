import { Backend } from '../constants';

const getUrlImages = (folder: string, imageName: string) => `${Backend.URL_BASE}${Backend.IMAGES}/${folder}/${imageName}`;

export default getUrlImages;

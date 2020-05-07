import { Domain } from '../constants';

const getDomain = (folder: string) => `${Domain.URL_BASE}${Domain.CARD_IMAGES}${folder}/`;

export default getDomain;

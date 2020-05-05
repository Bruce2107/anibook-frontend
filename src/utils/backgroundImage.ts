import { Image } from '../constants/Types';
import { Domain } from '../constants';

export const backgroundImages: Image[] = [
  { filename: 'AkariAkaza', extension: '.webp' },
  { filename: 'AkariAkazaManga', extension: '.webp' },
  { filename: 'Akko', extension: '.webp' },
  { filename: 'AkkoAndLotte', extension: '.webp' },
  { filename: 'Albedo', extension: '.webp' },
  { filename: 'AnastasiaHoshin', extension: '.webp' },
  { filename: 'AnnieLeonhart', extension: '.webp' },
  { filename: 'Aqua', extension: '.png' },
  { filename: 'AquaNormal', extension: '.png' },
  { filename: 'Beatrice', extension: '.webp' },
  { filename: 'BeatriceCake', extension: '.webp' },
  { filename: 'Chariot', extension: '.webp' },
  { filename: 'Chinatsu', extension: '.webp' },
  { filename: 'CuteGirlHappy', extension: '.webp' },
  { filename: 'CuteGirlLaughing', extension: '.webp' },
  { filename: 'Dekomori', extension: '.webp' },
  { filename: 'DekomoriSpy', extension: '.webp' },
  { filename: 'DianaMad', extension: '.webp' },
  { filename: 'Emilia', extension: '.webp' },
  { filename: 'Erwin', extension: '.webp' },
  { filename: 'Genos', extension: '.webp' },
  { filename: 'Gohan', extension: '.webp' },
  { filename: 'GohanSSJ2', extension: '.webp' },
  { filename: 'GokuFlying', extension: '.webp' },
  { filename: 'GokuJumping', extension: '.webp' },
  { filename: 'GokuSleeping', extension: '.webp' },
  { filename: 'GokuTired', extension: '.webp' },
  { filename: 'Historia', extension: '.webp' },
  { filename: 'KarenKujou', extension: '.gif' },
  { filename: 'KonataIzumi', extension: '.webp' },
  { filename: 'KuririnSuspicious', extension: '.webp' },
  { filename: 'LLawliet', extension: '.webp' },
  { filename: 'LupusreginaBeta', extension: '.webp' },
  { filename: 'MajinBoo', extension: '.webp' },
  { filename: 'MeguminHappy', extension: '.webp' },
  { filename: 'MeguminTired', extension: '.webp' },
  { filename: 'Mikasa', extension: '.webp' },
  { filename: 'NarberalGamma', extension: '.webp' },
  { filename: 'NarberalGammaRabbit', extension: '.webp' },
  { filename: 'NekoHearth', extension: '.webp' },
  { filename: 'Ram', extension: '.webp' },
  { filename: 'Rem', extension: '.webp' },
  { filename: 'RemBattle', extension: '.webp' },
  { filename: 'RinTohsaka', extension: '.webp' },
  { filename: 'RinTohsakaCrying', extension: '.webp' },
  { filename: 'Ryuk', extension: '.webp' },
  { filename: 'SaitamaBad', extension: '.webp' },
  { filename: 'SaitamaLauhing', extension: '.webp' },
  { filename: 'SaitamaOK', extension: '.webp' },
  { filename: 'SashaBraus', extension: '.webp' },
  { filename: 'SashaBrausBread', extension: '.webp' },
  { filename: 'SashaBrausThinking', extension: '.webp' },
  { filename: 'SatouKazuma', extension: '.webp' },
  { filename: 'Shenlong', extension: '.webp' },
  { filename: 'Sucy', extension: '.webp' },
  { filename: 'TakanashiRikka', extension: '.webp' },
  { filename: 'TakanashiRikkaChuuni', extension: '.webp' },
  { filename: 'TakanashiRikkaNormal', extension: '.webp' },
  { filename: 'ToshinoKyoko', extension: '.webp' },
  { filename: 'ToshinoKyokoTomato', extension: '.gif' },
  { filename: 'ToshinoKyokoTomato', extension: '.png' },
  { filename: 'UmaruDoma', extension: '.png' },
  { filename: 'Yato', extension: '.webp' },
  { filename: 'YatoKing', extension: '.webp' },
  { filename: 'YatoScared', extension: '.webp' },
  { filename: 'YuiFunami', extension: '.webp' },
];

export const generateRandomIndex = () => {
  const size = backgroundImages.length;
  return Math.floor(Math.random() * size);
};

const getImage = () => {
  const index = generateRandomIndex();
  const imageObject = backgroundImages[index];
  return `${Domain.URL_BASE}${Domain.BACKGROUND_IAMGES}${imageObject.filename}${imageObject.extension}`;
};

export default getImage;

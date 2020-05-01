import { Image } from '../constants/Types';

export const backgroundImages: Image[] = [
  { name: 'AkariAkaza', extension: '.webp' },
  { name: 'AkariAkazaManga', extension: '.webp' },
  { name: 'Akko', extension: '.webp' },
  { name: 'AkkoAndLotte', extension: '.webp' },
  { name: 'Albedo', extension: '.webp' },
  { name: 'AnastasiaHoshin', extension: '.webp' },
  { name: 'AnnieLeonhart', extension: '.webp' },
  { name: 'Aqua', extension: '.png' },
  { name: 'AquaNormal', extension: '.png' },
  { name: 'Beatrice', extension: '.webp' },
  { name: 'BeatriceCake', extension: '.webp' },
  { name: 'Chariot', extension: '.webp' },
  { name: 'Chinatsu', extension: '.webp' },
  { name: 'CuteGirlHappy', extension: '.webp' },
  { name: 'CuteGirlLaughing', extension: '.webp' },
  { name: 'Dekomori', extension: '.webp' },
  { name: 'DekomoriSpy', extension: '.webp' },
  { name: 'DianaMad', extension: '.webp' },
  { name: 'Emilia', extension: '.webp' },
  { name: 'Erwin', extension: '.webp' },
  { name: 'Genos', extension: '.webp' },
  { name: 'Gohan', extension: '.webp' },
  { name: 'GohanSSJ2', extension: '.webp' },
  { name: 'GokuFlying', extension: '.webp' },
  { name: 'GokuJumping', extension: '.webp' },
  { name: 'GokuSleeping', extension: '.webp' },
  { name: 'GokuTired', extension: '.webp' },
  { name: 'Historia', extension: '.webp' },
  { name: 'KarenKujou', extension: '.gif' },
  { name: 'KonataIzumi', extension: '.webp' },
  { name: 'KuririnSuspicious', extension: '.webp' },
  { name: 'LLawliet', extension: '.webp' },
  { name: 'LupusreginaBeta', extension: '.webp' },
  { name: 'MajinBoo', extension: '.webp' },
  { name: 'MeguminHappy', extension: '.webp' },
  { name: 'MeguminTired', extension: '.webp' },
  { name: 'Mikasa', extension: '.webp' },
  { name: 'NarberalGamma', extension: '.webp' },
  { name: 'NarberalGammaRabbit', extension: '.webp' },
  { name: 'NekoHearth', extension: '.webp' },
  { name: 'Ram', extension: '.webp' },
  { name: 'Rem', extension: '.webp' },
  { name: 'RemBattle', extension: '.webp' },
  { name: 'RinTohsaka', extension: '.webp' },
  { name: 'RinTohsakaCrying', extension: '.webp' },
  { name: 'Ryuk', extension: '.webp' },
  { name: 'SaitamaBad', extension: '.webp' },
  { name: 'SaitamaLauhing', extension: '.webp' },
  { name: 'SaitamaOK', extension: '.webp' },
  { name: 'SashaBraus', extension: '.webp' },
  { name: 'SashaBrausBread', extension: '.webp' },
  { name: 'SashaBrausThinking', extension: '.webp' },
  { name: 'SatouKazuma', extension: '.webp' },
  { name: 'Shenlong', extension: '.webp' },
  { name: 'Sucy', extension: '.webp' },
  { name: 'TakanashiRikka', extension: '.webp' },
  { name: 'TakanashiRikkaChuuni', extension: '.webp' },
  { name: 'TakanashiRikkaNormal', extension: '.webp' },
  { name: 'ToshinoKyoko', extension: '.webp' },
  { name: 'ToshinoKyoukoTomato', extension: '.gif' },
  { name: 'ToshinoKyoukoTomato', extension: '.png' },
  { name: 'UmaruDoma', extension: '.png' },
  { name: 'Yato', extension: '.webp' },
  { name: 'YatoKing', extension: '.webp' },
  { name: 'YatoScared', extension: '.webp' },
  { name: 'YuiFunami', extension: '.webp' },
];

export const generateRandomIndex = () => {
  const size = backgroundImages.length;
  return Math.floor(Math.random() * size);
};

const getImage = () => {
  const index = generateRandomIndex();
  const imageObject = backgroundImages[index];
  return `https://anibook.com.br/React/background/${imageObject.name}${imageObject.extension}`;
};

export default getImage;

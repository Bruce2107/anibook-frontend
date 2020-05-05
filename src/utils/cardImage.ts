import { ImageCard } from '../constants/Types';
import { Domain } from '../constants';

export const cardImages: ImageCard[] = [
  {
    name: 'seitokaiyakuindomo',
    displayName: 'Seitokai Yakuindomo',
    filename: 'card',
    extension: '.png',
  },
  {
    name: 'bokunohero',
    displayName: 'Boku no Hero',
    filename: 'card',
    extension: '.png',
  },
  {
    name: 'swordartonline',
    displayName: 'Sword Art Online',
    filename: 'card',
    extension: '.png',
  },
];
export const randomArrayWithoutRepetition = (arraySize: number): number[] => {
  const previousIndex: number[] = [];
  const size = cardImages.length;
  let control = 0;
  while (control < arraySize) {
    let index = Math.floor(Math.random() * size);
    if (!previousIndex.includes(index)) {
      previousIndex.push(index);
      control++;
    }
    if (control === size) break;
  }
  return previousIndex;
};

export const randomObjectWithImages = (arraySize: number) => {
  const indexes = randomArrayWithoutRepetition(arraySize);
  const randomObject: ImageCard[] = [];
  indexes.forEach((value) => {
    randomObject.push(cardImages[value]);
  });
  return randomObject;
};

export const objectWithSpecificImage = (name: string): ImageCard => {
  if (!name.trim()) {
    throw new Error('Informe um nome válido para a imagem');
  }
  name = name.toLowerCase().trim().replace(' ', '');
  const object = cardImages.filter((image) => image.name === name);
  if (!object.length) {
    throw new Error('Não existe uma imagem associada a este nome');
  }
  return object[0];
};

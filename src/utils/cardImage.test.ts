import {
  randomArrayWithoutRepetition,
  cardImages,
  randomObjectWithImages,
  objectWithSpecificImage,
} from './cardImage';

describe('Card Image', () => {
  let size: number;
  beforeAll(() => {
    size = cardImages.length;
  });
  test('array size', () => {
    let array = randomArrayWithoutRepetition(4);
    expect(array.length).toBeLessThanOrEqual(size);
    array = randomArrayWithoutRepetition(2);
    expect(array.length).toBe(2);
  });
  it('should return an random object of images', () => {
    const object = randomObjectWithImages(2);
    expect(object.length).toBe(2);
    expect(object[0].name).toBeDefined();
    expect(object[1].name).toBeDefined();
  });

  it('should return a error when name are invalid', () => {
    expect(() => {
      objectWithSpecificImage('');
    }).toThrow();
  });
  it('shoud return a error when image are not found',()=>{
    expect(()=>{
      objectWithSpecificImage('nomedaimagem')
    }).toThrowError('Não existe uma imagem associada a este nome')
  })
  it('should return a specific image object',()=>{
    const image = objectWithSpecificImage('seito kaiyAkuindomo ');
    expect(image.displayName).toBe('Seitokai Yakuindomo')
  })
});

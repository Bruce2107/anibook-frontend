import getImage, {
  generateRandomIndex,
  backgroundImages,
} from './backgroundImage';

describe('Background Image', () => {
  let size: number;
  beforeAll(() => {
    size = backgroundImages.length;
  });
  test('should return a integer', () => {
    const number = generateRandomIndex();

    expect(number).toBeGreaterThan(0);
    expect(number).toBeLessThan(size);
  });
  test('should return a string with the name of image', () => {
    const image = getImage();
    expect(image).toBeDefined();
  });
});

export default {};

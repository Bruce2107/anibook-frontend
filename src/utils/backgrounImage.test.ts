import getImage from './backgroundImage';
describe('Background Image', () => {
  test('should return a string with the name of image', () => {
    const image = getImage();
    expect(image).toBeDefined();
  });
});

export default {};

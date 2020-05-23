import { join } from 'path';

const imageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
  event.currentTarget.src = join('/static', 'imageError.png');
};

export default imageError;

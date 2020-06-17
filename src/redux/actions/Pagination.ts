import { TOGGLE_PAGE } from '../../constants';

export function TogglePage(page: number) {
  return {
    type: TOGGLE_PAGE,
    page,
  };
}

export default TogglePage;

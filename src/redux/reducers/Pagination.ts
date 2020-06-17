import { Action, PaginationState } from '../../constants/Types';
import { TOGGLE_PAGE } from '../../constants';

const INITIAL_STATE: PaginationState = {
  page: Number(localStorage.getItem('page')) || 1,
};

export default function (
  state = INITIAL_STATE,
  action: Action & { page: number },
) {
  switch (action.type) {
    case TOGGLE_PAGE: {
      localStorage.setItem('page', String(action.page));
      return { ...state, page: action.page };
    }
    default:
      return state;
  }
}

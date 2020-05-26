import { ThemeState, Action } from '../../constants/Types';
import { TOGGLE_THEME } from '../../constants';

const INITIAL_STATE: ThemeState = localStorage.getItem('theme')
  ? { darkMode: !(localStorage.getItem('theme') === 'light') }
  : { darkMode: false };

export default function (state = INITIAL_STATE, action: Action): ThemeState {
  switch (action.type) {
    case TOGGLE_THEME:
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
}

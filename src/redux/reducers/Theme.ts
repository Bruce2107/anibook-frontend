import { ThemeState, Action } from '../../constants/Types';
import { Theme } from '../../constants';

const INITIAL_STATE: ThemeState = localStorage.getItem('theme')
  ? { darkMode: !(localStorage.getItem('theme') === 'light') }
  : { darkMode: false };
export default function (state = INITIAL_STATE, action: Action): ThemeState {
  switch (action.type) {
    case Theme.TOGGLE_THEME:
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
}

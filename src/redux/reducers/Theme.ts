import { ThemeState, Action } from '../../constants/Types';
import { constTheme } from '../../constants';

const INITIAL_STATE: ThemeState = localStorage.getItem('theme')
  ? { darkMode: localStorage.getItem('theme') === 'light' ? false : true }
  : { darkMode: false };
export default function (state = INITIAL_STATE, action: Action): ThemeState {
  switch (action.type) {
    case constTheme.TOGGLE_THEME:
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
}

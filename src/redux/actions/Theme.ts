import { constTheme } from '../../constants';

export function ToggleTheme() {
  return {
    type: constTheme.TOGGLE_THEME,
  };
}

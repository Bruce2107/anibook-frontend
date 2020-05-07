import { Theme } from '../../constants';

export function ToggleTheme() {
  return {
    type: Theme.TOGGLE_THEME,
  };
}

export default ToggleTheme;

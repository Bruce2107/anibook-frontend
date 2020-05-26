import { TOGGLE_SIDEBAR } from '../../constants';
import { Action, SidebarState } from '../../constants/Types';

const INITIAL_STATE: SidebarState = {
  isOpen: false,
};

export default function (state = INITIAL_STATE, action: Action): SidebarState {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
}

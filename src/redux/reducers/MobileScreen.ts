import { Action } from '../../constants/Types';

const INITIAL_STATE = window.screen.width < 770;

export default function (state = INITIAL_STATE, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}

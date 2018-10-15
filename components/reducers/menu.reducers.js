import { TYPES } from "./../actions/menu.action";

const initialState = {
  isMenuOpen: false
};

export function openMenuReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.OPEN_MENU:
      return {
        ...state,
        isMenuOpen: true
      };
    default:
      return state;
  }
}

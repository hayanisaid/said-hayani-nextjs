import { TYPES } from "./../actions/nav.actions";

const initialState = {
  isNightMode: false,
  navClass: "navdaymode"
};

export function setNightModeReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.NIGHT_MODE:
      return {
        ...state,
        isNightMode: true,
        navClass: action.payload
      };
    default:
      return state;
  }
}

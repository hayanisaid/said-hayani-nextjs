import { TYPES } from "./../actions/nav.actions";

const initialState = {
  isNightMode: false,
  backgroundColor: "#f7f7f7",
  fontColor: "#c00000"
};

export function setNightModeReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.NIGHT_MODE:
      return {
        ...state,
        backgroundColor: "#141010",
        fontColor: "#fff"
      };
      break;
    default:
      return initialState;
  }
}

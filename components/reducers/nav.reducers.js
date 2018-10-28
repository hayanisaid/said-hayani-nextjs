import { TYPES } from "./../actions/nav.actions";

const initialState = {
  isNightMode: false,
  navClass: "navdaymode",
  circlemodeclass: "cirlceDay",
  homeClass: "homeDay",
  titleclass: "titleDay",
  nightBackground: "",
  nightText: "",
  whiteBackground: ""
};

export function setNightModeReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.NIGHT_MODE:
      return {
        ...state,
        isNightMode: action.payload.isNightMode,
        navClass: action.payload.navClass,
        circlemodeclass: action.payload.circlemodeclass,
        homeClass: action.payload.homeClass,
        titleclass: action.payload.titleclass,
        nightBackground: action.payload.nightBackground,
        nightText: action.payload.nightText,
        whiteBackground: action.payload.whiteBackground
      };
    default:
      return state;
  }
}

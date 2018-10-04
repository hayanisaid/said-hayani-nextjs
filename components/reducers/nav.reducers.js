import { TYPES } from "./../actions/nav.actions";

const initialState = {
  isNightMode: false,
  navClass: "navdaymode",
  circlemodeclass: "cirlceDay",
  homeClass: "homeDay",
  titleclass: "titleDay"
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
        titleclass: action.payload.titleclass
      };
    default:
      return state;
  }
}

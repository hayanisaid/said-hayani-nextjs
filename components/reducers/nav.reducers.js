import { TYPES } from "./../actions/nav.actions";

const initialState = {
  isNightMode: false,
  navClass: "navdaymode",
  circlemodeclass: "cirlceDay",
  homeClass: "homeDay",
  titleclass: "titleDay",
  nightBackground: "",
  nightText: "",
  whiteBackground: "",
  night_card: ""
};

export function setNightModeReducer(state = initialState, action) {
  console.log("action", action);
  let {
    isNightMode,
    navClass,
    circlemodeclass,
    homeClass,
    titleclass,
    nightBackground,
    nightText,
    whiteBackground,
    night_card
  } = action.payload ? action.payload : "";
  switch (action.type) {
    case TYPES.NIGHT_MODE:
      return {
        ...state,
        isNightMode: isNightMode,
        navClass: navClass,
        circlemodeclass: circlemodeclass,
        homeClass: homeClass,
        titleclass: titleclass,
        nightBackground: nightBackground,
        nightText: nightText,
        whiteBackground: whiteBackground,
        night_card: night_card
      };
    default:
      return state;
  }
}

export const TYPES = {
  NIGHT_MODE: "NIGHT_MODE"
};

export const ActionInvorkers = {
  // my actions
  setNightMode: data => setNightMode(data)
};

export const setNightMode = mode => {
  return {
    type: TYPES.NIGHT_MODE,
    payload: mode
  };
};

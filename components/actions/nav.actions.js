export const TYPES = {
  NIGHT_MODE: "NIGHT_MODE"
};

export const ActionInvorkers = {
  // my actions
  setNightMode: () => setNightMode()
};

export const setNightMode = () => {
  return {
    type: TYPES.NIGHT_MODE
  };
};

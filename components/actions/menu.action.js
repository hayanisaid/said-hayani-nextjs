export const TYPES = {
  OPEN_MENU: "OPEN_MENU"
};

export const ActionInvorkers = {
  openMenu: () => openMenu()
};

export const openMenu = () => {
  return {
    type: OPEN_MENU
  };
};

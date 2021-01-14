import {CHANGE_THEME} from "./actionsTypes";


export const changeTheme = (theme) => {
  return {
    type: CHANGE_THEME,
    payload: theme
  }
};

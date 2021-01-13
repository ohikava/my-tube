import {CHANGE_LANGUAGE} from "./actionsTypes";

export const changeLanguage = (lang) => {
  return {
    type: CHANGE_LANGUAGE,
    payload: lang
  };
};

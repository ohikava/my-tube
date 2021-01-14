import {CHANGE_THEME, THEMES} from "./actionsTypes";

const initialState = {
  theme: THEMES.STANDART
};

export default function ThemeReducer(state = initialState, action) {
  switch(action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.payload
      };
    default:
      return state;
  }
};

import {CHANGE_LANGUAGE, LANGUAGES} from "./actionsTypes";

const initialState = {
  language: LANGUAGES.RUS
};

export default function LanguageReducer(state = initialState, action) {
  switch(action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload
      };
    default:
      return state;
  }
};

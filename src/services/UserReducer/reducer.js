import {REGISTER, CLEAR} from "./actionsTypes";

const initialState = {
  registrationError: null
};

export default function UserReducer (state = initialState, action) {
  switch(action.type) {
    case REGISTER:
      return {
        ...state,
        registrationError: action.payload.code
      };
    case CLEAR:
      return {
        ...state,
        registrationError: null
      };
    default:
      return state;
  }
};

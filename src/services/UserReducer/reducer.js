import {REGISTER, LOGIN, CLEAR} from "./actionsTypes";

const initialState = {
  registrationError: null,
  token: null
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
        registrationError: null,
        loginError: null
      };
    case LOGIN:
      return {
        ...state,
        token: action.payload.token,
        loginError: action.payload.code
      }
    default:
      return state;
  }
};

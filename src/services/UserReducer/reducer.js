import {REGISTER, LOGIN} from "./actionsTypes";

const initialState = {
  token: null
};

export default function UserReducer (state = initialState, action) {
  switch(action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload.token,
      }
    default:
      return state;
  }
};

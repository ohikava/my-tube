import {GET_SUBSCRIPTIONS} from "./actionsTypes";

const initialState = {
  subsShort: []
};

export default function SubscribeReducer(state = initialState, action) {
  switch(action.type) {
    case GET_SUBSCRIPTIONS:
      return {
        ...state,
        subsShort: action.payload
      }
    default:
      return state;
  }
};

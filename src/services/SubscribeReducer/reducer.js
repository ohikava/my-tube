import {GET_SUBSCRIPTIONS, GET_SUBSCRIPTIONS_ALL} from "./actionsTypes";

const initialState = {
  subsShort: [],
  subs: []
};

export default function SubscribeReducer(state = initialState, action) {
  switch(action.type) {
    case GET_SUBSCRIPTIONS:
      return {
        ...state,
        subsShort: action.payload
      }
    case GET_SUBSCRIPTIONS_ALL:
      return {
        ...state,
        subs: action.payload
      }
    default:
      return state;
  }
};

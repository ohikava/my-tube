import {GET_NOTIFICATIONS} from "./actionsTypes";

const initialState = {
  notifications: []
};

export default function GetNotifications (state = initialState, action) {
  switch(action.type) {
    case GET_NOTIFICATIONS:
      return {
        ...state,
        notifications: action.payload
      };
    default:
      return state;
  }
}

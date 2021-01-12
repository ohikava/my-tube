import {GET_VIDEOS} from "./actionsTypes";

const initialState = {
  videos: []
};

export default function VideoReducer(state = initialState, action) {
  switch(action.type) {
    case GET_VIDEOS:
      return {
        ...state,
        videos: action.payload
      };
    default:
      return state;
  }
};

import {GET_VIDEOS,CLEAR, GET_VIDEO} from "./actionsTypes";

const initialState = {
  videos: [],
  video: {}
};

export default function VideoReducer(state = initialState, action) {
  switch(action.type) {
    case GET_VIDEOS:
      return {
        ...state,
        videos: action.payload
      };
    case GET_VIDEO:
      return {
        ...state,
        video: action.payload
      }
    case CLEAR:
      return {
        ...state,
        video: {}
      }
    default:
      return state;
  }
};

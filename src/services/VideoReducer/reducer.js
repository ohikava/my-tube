import {GET_VIDEOS,CLEAR, GET_VIDEO, SEARCH_VIDEO_SHORT} from "./actionsTypes";

const initialState = {
  videos: [],
  video: {},
  short: []
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
    case SEARCH_VIDEO_SHORT:
      return {
        ...state,
        short: action.payload
      }
    default:
      return state;
  }
};

import {GET_VIDEOS,CLEAR, SEARCH_VIDEO, GET_VIDEO, SEARCH_VIDEO_SHORT} from "./actionsTypes";

const initialState = {
  videos: [],
  video: {},
  short: [],
  search: []
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
        video: {},
        short: [],
        search: []
      };
    case SEARCH_VIDEO_SHORT:
      return {
        ...state,
        short: action.payload
      }
    case SEARCH_VIDEO:
      return {
        ...state,
        search: action.payload
      }
    default:
      return state;
  }
};

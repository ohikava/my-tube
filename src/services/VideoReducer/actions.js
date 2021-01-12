import {GET_VIDEOS} from "./actionsTypes";

export const getVideos() => {
  const data = [];
  return {
    type: GET_VIDEOS,
    payload: data
  };
};

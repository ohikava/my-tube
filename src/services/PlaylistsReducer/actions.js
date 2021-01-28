import {GET_PLAYLISTS} from "./actionsTypes";

export const getPlaylists = (token) => dispatch => {
  const result = [];

  dispatch({
    type: GET_PLAYLISTS,
    payload: result
  })
}

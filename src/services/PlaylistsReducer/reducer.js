import {GET_PLAYLISTS} from "./actionsTypes";

const initialState = {
  playlistsShort: []
};

export default function PlaylistsReducer(state = initialState, action) {
  switch(action.type) {
    case GET_PLAYLISTS:
      return {
        ...state,
        playlistsShort: action.payload
      }
    default:
      return state;
  }
};

import { ALBUMS_FETCH_DATA_SUCCESS } from "../actions/albums";
import { SET_ACTIVE_ALBUM_SUCCESS } from "../actions/albums";

export function fetchAlbums(state = [], action) {
  switch (action.type) {
    case ALBUMS_FETCH_DATA_SUCCESS:
      return {
        ...state,
        albums: action.payload
      };
    default:
      return state;
  }
}

export function activeAlbum(state = [], action) {
  switch (action.type) {
    case SET_ACTIVE_ALBUM_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

// export default fetchAlbums;
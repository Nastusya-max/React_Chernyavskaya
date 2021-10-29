// export const ADD_ALBUMS_TYPE = 'ADD_ALBUMS_TYPE';

// export function addAlbums({ albums }) {
//   return {
//     type: ADD_ALBUMS_TYPE,
//     payload: albums
//   }
// }

// const initialState = {
//   albums: [{title:'hjhj'}],
//   photos: [{title:'hjhj'}],
// }

// function albums(state = initialState.albums, action) {
//   switch (action.type) {
//     case ADD_ALBUMS_TYPE:
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// }

// export default albums;

import { ALBUMS_FETCH_DATA_SUCCESS } from "../actions/albums"
import { SET_ACTIVE_ALBUM_SUCCESS } from "../actions/albums"
import { DELETE_ACTIVE_ALBUM_SUCCESS } from "../actions/albums"

export function albumsFetchDataSuccess(albums) {
  return {
    type: ALBUMS_FETCH_DATA_SUCCESS,
    payload: albums
  }
}

export function setActiveAlbum(activeAlbum) {
  return {
    type: SET_ACTIVE_ALBUM_SUCCESS,
    payload: activeAlbum
  }
}

export function deleteActiveAlbum(activeAlbum) {
  return {
    type: DELETE_ACTIVE_ALBUM_SUCCESS,
    payload: activeAlbum
  }
}

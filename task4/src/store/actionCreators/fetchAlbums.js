import { ALBUMS_FETCH_DATA_SUCCESS } from "../actions/albums"

export function albumsFetchDataSuccess(albums) {
  return {
    type: ALBUMS_FETCH_DATA_SUCCESS,
    payload: albums
  }
}



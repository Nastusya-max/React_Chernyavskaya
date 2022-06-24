import { ALBUMS_FETCH_DATA_SUCCESS } from "../actions/albums"
import { SET_ACTIVE_ALBUM_SUCCESS } from "../actions/albums"
import { DELETE_ACTIVE_ALBUM_SUCCESS } from "../actions/albums"
import { ADD_ALBUMS_TYPE } from "../actions/albums"

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

export function addNewAlbums(newAlbums) {
  return {
    type: ADD_ALBUMS_TYPE,
    payload: newAlbums
  }
}
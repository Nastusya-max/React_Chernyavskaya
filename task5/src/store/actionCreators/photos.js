import { PHOTOS_FETCH_DATA_SUCCESS } from "../actions/photos"
import { ADD_PHOTOS_TYPE } from "../actions/photos"

export function photosFetchDataSuccess(photos) {
  return {
    type: PHOTOS_FETCH_DATA_SUCCESS,
    payload: photos
  }
}

export function addNewPhotos(photos) {
  return {
    type: ADD_PHOTOS_TYPE,
    payload: photos
  }
}
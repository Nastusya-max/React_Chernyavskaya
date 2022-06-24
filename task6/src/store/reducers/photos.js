import { PHOTOS_FETCH_DATA_SUCCESS } from "../actions/photos";
import { ADD_PHOTOS_TYPE } from "../actions/photos";

export function fetchPhotos(state = [], action) {
  switch (action.type) {
    case PHOTOS_FETCH_DATA_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

export function addPhotos(state = [], action) {
  switch (action.type) {
    case ADD_PHOTOS_TYPE:
      return [...state, action.payload];
    default:
      return state;
  }
}


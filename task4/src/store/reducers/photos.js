import { PHOTOS_FETCH_DATA_SUCCESS } from "../actions/photos";

function photos(state = [], action) {
  switch (action.type) {
    case PHOTOS_FETCH_DATA_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

export default photos;
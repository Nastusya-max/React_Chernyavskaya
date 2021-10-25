const ADD_PHOTOS_TYPE = 'ADD_PHOTOS_TYPE';

export function addPhotos({ photos }) {
  return {
    type: ADD_PHOTOS_TYPE,
    payload: photos
  }
}

const initialState = {
  albums: [{title:'hjhj'}],
  photos: [{title:'hjhj'}],
}

function photos(state = initialState.photos, action) {
  switch (action.type) {
    case ADD_PHOTOS_TYPE:
      return [...state, action.payload];
    default:
      return state;
  }
}

export default photos;
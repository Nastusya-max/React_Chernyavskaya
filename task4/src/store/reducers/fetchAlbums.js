// export function albums(state = [], action) {
//   switch (action.type) {
//     case "ALBUMS_FETCH_DATA_SUCCESS":
//       return action.albums;
//     default:
//       return state;
//   }
// }   

// import { ALBUMS_FETCH_DATA_SUCCESS } from "../actions/albums";

function reducer(state = { data: "" }, action) {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
}

export default reducer;


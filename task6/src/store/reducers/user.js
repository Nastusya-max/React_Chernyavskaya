import { ADD_USER_TYPE } from "../actions/user";

export function addUser(state = [], action) {
  switch (action.type) {
    case ADD_USER_TYPE:
      return action.payload;
    default:
      return state;
  }
}

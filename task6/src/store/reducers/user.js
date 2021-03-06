import { ADD_USER_TYPE } from "../actions/user";
import { USERS_FETCH_DATA_SUCCESS } from "../actions/user";
import { ACTIVE_USER } from "../actions/user";

export function addUser(state = [], action) {
  switch (action.type) {
    case ADD_USER_TYPE:
      return action.payload;
    default:
      return state;
  }
}

export function fetchUsers(state = [], action) {
  switch (action.type) {
    case USERS_FETCH_DATA_SUCCESS:
      return action.payload
    default:
      return state;
  }
}

export function activeUser(state = [], action) {
  switch (action.type) {
    case ACTIVE_USER:
      return action.payload;
    default:
      return state;
  }
}
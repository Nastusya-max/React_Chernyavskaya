import { ADD_USER_TYPE } from "../actions/user";
import { USERS_FETCH_DATA_SUCCESS }  from "../actions/user";

export function addUser(user) {
  return {
    type: ADD_USER_TYPE,
    payload: user
  }
}

export function usersFetchDataSuccess(albums) {
  return {
    type: USERS_FETCH_DATA_SUCCESS,
    payload: albums
  }
}
import { ADD_USER_TYPE } from "../actions/user";

export function addUser(user) {
  return {
    type: ADD_USER_TYPE,
    payload: user
  }
}
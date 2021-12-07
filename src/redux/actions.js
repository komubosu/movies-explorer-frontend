import { SET_LOGGED_IN_STATUS, UPDATE_USER } from "./types";

export function updateUser(newUserInfo) {
  return {
    type: UPDATE_USER,
    payload: newUserInfo,
  };
};

export function setLoggedInStatus(status) {
  return {
    type: SET_LOGGED_IN_STATUS,
    payload: status,
  };
};
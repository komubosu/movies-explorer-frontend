import { SET_LOGGED_IN_STATUS } from "./types";

const initialLoggedIn = false;

export const loggedInReducer = (state = initialLoggedIn, action) => {
  switch (action.type) {
    case SET_LOGGED_IN_STATUS:
      return action.payload;
    default: return state;
  };
};
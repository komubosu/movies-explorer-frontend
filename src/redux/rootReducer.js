import { combineReducers } from "redux";
import { loggedInReducer } from "./LoggedInReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  loggedIn: loggedInReducer,
});
import { UPDATE_USER } from "./types";

const initialUser = {
  name: '',
  email: '',
};

export const userReducer = (state = initialUser, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return action.payload;
    default: return state;
  };
};
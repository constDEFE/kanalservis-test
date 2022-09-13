import { LOGIN, PASSWORD, USER } from "../../utils/constants";

const initialState = {
  login: "",
  password: "",
  user: false,
};

export const authReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case LOGIN:
      return { ...state, login: actions.payload };
    case PASSWORD:
      return { ...state, password: actions.payload };
    case USER:
      return { ...state, user: actions.payload };
    default:
      return state;
  }
};

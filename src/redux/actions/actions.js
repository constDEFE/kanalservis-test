import { LOGIN, PASSWORD, USER } from "../../utils/constants";

export const setLogin = (payload) => {
  return {
    type: LOGIN,
    payload,
  };
};

export const setPassword = (payload) => {
  return {
    type: PASSWORD,
    payload,
  };
};

export const signIn = () => {
  return {
    type: USER,
    payload: true,
  };
};

export const logout = () => {
  return {
    type: USER,
    payload: false,
  };
};

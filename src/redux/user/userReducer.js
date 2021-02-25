import { LOGIN_COMPANY_SUCCESSFUL } from "./userTypes";

const initState = {
  role: "",
  token: "",
  isLoggedIn: false,
  lastLoggedIn: null,
  userInfo: {},
}

const userReducer = (state = initState, {type, payload}) => {
  switch (type) {
    case LOGIN_COMPANY_SUCCESSFUL:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
}

export default userReducer;

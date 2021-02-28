import { LOGIN_COMPANY_SUCCESSFUL, LOGIN_STUDENT_SUCCESSFUL, LOGOUT } from "./userTypes";

const initState = {
  role: "",
  token: "",
  isLoggedIn: false,
  lastLoggedIn: null,
  userInfo: {},
}

const userReducer = (state = initState, {type, payload}) => {
  switch (type) {
    case LOGIN_STUDENT_SUCCESSFUL:
      return {
        ...state,
        ...payload
      };
    case LOGIN_COMPANY_SUCCESSFUL:
      return {
        ...state,
        ...payload
      };
    case LOGOUT: 
      return initState;
    default:
      return state;
  }
}

export default userReducer;

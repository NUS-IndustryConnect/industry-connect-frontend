import { 
  LOGIN_ADMIN_SUCCESSFUL, 
  LOGIN_COMPANY_SUCCESSFUL, 
  LOGIN_STUDENT_SUCCESSFUL, 
  LOGOUT, 
  REFRESH
} from "./userTypes";

const initState = {
  role: "",
  token: "",
  isLoggedIn: false,
  userInfo: {},
}

const userReducer = (state = initState, {type, payload}) => {
  switch (type) {
    case REFRESH:
      return {
        ...state,
        ...payload
      };
    case LOGIN_ADMIN_SUCCESSFUL:
      return {
        ...state,
        ...payload
      };
    case LOGIN_COMPANY_SUCCESSFUL:
      return {
        ...state,
        ...payload
      };
    case LOGIN_STUDENT_SUCCESSFUL:
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

import authenticationApi from "../../server/authenticationApi";
import { 
  LOGIN_ADMIN_SUCCESSFUL, 
  LOGIN_COMPANY_SUCCESSFUL, 
  LOGIN_STUDENT_SUCCESSFUL, 
  LOGOUT 
} from "./userTypes"

export const handleFetchAuth = (code) => async (dispatch) => {
  await authenticationApi.fetchAuth(code)
    .then(res => { // authenticated user
      localStorage.setItem('@token', res.webToken);
      if (res.role === "NUSSTU") { // It is student login
        dispatch(loginStudent(res.webToken))
      } else {
        dispatch(loginAdmin(res.webToken))
      }
    }).catch(error => { throw error; })
}

const loginAdmin = (token) => async (dispatch) => {
  dispatch({
    type: LOGIN_ADMIN_SUCCESSFUL,
    payload: {
      role: "admin",
      token: token,
      isLoggedIn: true,
    }
  })
}

const loginStudent = (token) => async (dispatch) => {
  dispatch({
    type: LOGIN_STUDENT_SUCCESSFUL,
    payload: {
      role: "student",
      token: token,
      isLoggedIn: true,
    }
  })
}

export const loginCompanyWithOTP = (data) => async (dispatch) => {
  await authenticationApi.verifyOTP(data)
    .then(res => {
      localStorage.setItem('@token', "res.data.token");
      dispatch({
        type: LOGIN_COMPANY_SUCCESSFUL,
        payload: {
          role: "industry",
          token: "success",
          isLoggedIn: true,
          userInfo: {...res},
        }
      })
    })
    .catch(err => { throw err; })
}

export const logout = () => async (dispatch) => {
  // TODO: link up to backend call
  Promise.resolve().then(() => {
    localStorage.removeItem('@token');
    dispatch({
      type: LOGOUT,
      payload: {}
    })
  })
}

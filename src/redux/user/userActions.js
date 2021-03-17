import authenticationApi from "../../server/authenticationApi";
import { 
  LOGIN_ADMIN_SUCCESSFUL, 
  LOGIN_COMPANY_SUCCESSFUL, 
  LOGIN_STUDENT_SUCCESSFUL, 
  LOGOUT 
} from "./userTypes"

export const loginAdmin = () => async (dispatch) => {
  // TODO: link up to backend call
  Promise.resolve().then(res => {
    // response sucessful
    localStorage.setItem('@token', "res.data.token");
    dispatch({
      type: LOGIN_ADMIN_SUCCESSFUL,
      payload: {
        role: "admin",
        token: "success",
        isLoggedIn: true,
      }
    })
  }).catch(err => { throw err; })
}

export const loginStudent = () => async (dispatch) => {
  // TODO: link up to backend call
  Promise.resolve().then(res => {
    // response sucessful
    localStorage.setItem('@token', "res.data.token");
    dispatch({
      type: LOGIN_STUDENT_SUCCESSFUL,
      payload: {
        role: "student",
        token: "success",
        isLoggedIn: true,
      }
    })
  }).catch(err => { throw err; })
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

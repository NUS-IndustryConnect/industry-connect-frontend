import { 
  LOGIN_ADMIN_SUCCESSFUL, 
  LOGIN_COMPANY_SUCCESSFUL, 
  LOGIN_STUDENT_SUCCESSFUL, 
  LOGOUT 
} from "./userTypes"

export const loginAdmin = () => async (dispatch) => {
  // TODO: link up to backend call
  console.log("Redux action: Login admin")
  Promise.resolve().then(() => {
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
  }).catch(err => console.log(err))
}

export const loginStudent = () => async (dispatch) => {
  // TODO: link up to backend call
  console.log("Redux action: Login student")
  Promise.resolve().then(() => {
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
  }).catch(err => console.log(err))
}

export const loginCompany = ({ email, otp }) => async (dispatch) => {
  // TODO: link up to backend call
  Promise.resolve().then(() => {
    // response sucessful
    localStorage.setItem('@token', "res.data.token");
    dispatch({
      type: LOGIN_COMPANY_SUCCESSFUL,
      payload: {
        role: "company",
        token: "success",
        isLoggedIn: true,
      }
    })
  }).catch(err => console.log(err))
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

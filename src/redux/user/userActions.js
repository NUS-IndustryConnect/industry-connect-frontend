import { LOGIN_COMPANY_SUCCESSFUL } from "./userTypes"

export const login = ({ email, otp }) => async (dispatch) => {
  // TODO: link up to backend call
  Promise.resolve().then(() => {
    // response sucessful
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

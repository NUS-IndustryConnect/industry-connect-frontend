import authenticationApi from "../../server/authenticationApi";
import { ADMIN, COMPANY, STUDENT } from "../../server/utils";
import { announcementThunks } from "../announcementSlice";
import { getAdminIndustryThunk, getIndustryIndustryThunk, getStudentIndustryThunk } from "../industry";
import { 
  LOGIN_ADMIN_SUCCESSFUL, 
  LOGIN_COMPANY_FAILURE, 
  LOGIN_COMPANY_SUCCESSFUL, 
  LOGIN_STUDENT_SUCCESSFUL, 
  LOGOUT,
  REFRESH_FAILURE,
  REFRESH_SUCCESS
} from "./userTypes"

export const handleFetchAuth = (code) => async (dispatch) => {
  await authenticationApi.fetchAuth(code)
    .then(res => { // authenticated user
      localStorage.setItem('@token', res.webToken);
      localStorage.setItem('@userInfo', JSON.stringify(res));
      localStorage.setItem('@isLoggedIn', true);
      if (res.role === "NUSSTU") { // It is student login
        dispatch(loginStudent(res.webToken))
      } else {
        dispatch(loginAdmin(res.webToken))
      }
    }).catch(error => { throw error; })
}

export const handleLocalAuth = (role) => async (dispatch) => {
  localStorage.setItem('@token', 'token');
  localStorage.setItem('@isLoggedIn', true);
  if (role === STUDENT) {
    dispatch(loginStudent('token'))
  } else {
    dispatch(loginAdmin('token'))
  }
}

const loginAdmin = (token) => async (dispatch) => {
  localStorage.setItem('@role', ADMIN);
  Promise.resolve().then(() => {
    dispatch({
      type: LOGIN_ADMIN_SUCCESSFUL,
      payload: {
        role: ADMIN,
        token: token,
        isLoggedIn: true,
      }
    })
  }).then(() => {
    dispatch(announcementThunks.getAdminAnnouncements());
    dispatch(getAdminIndustryThunk());
  })
}

const loginStudent = (token) => async (dispatch) => {
  localStorage.setItem('@role', STUDENT);
  Promise.resolve().then(() => {
    dispatch({
      type: LOGIN_STUDENT_SUCCESSFUL,
      payload: {
        role: STUDENT,
        token: token,
        isLoggedIn: true,
      }
    })
  }).then(() => {
    dispatch(announcementThunks.getStudentAnnouncements());
    dispatch(getStudentIndustryThunk());
  })
}

export const loginCompanyWithOTP = (data) => async (dispatch) => {
  await authenticationApi.verifyOTP(data).then(res => {
    localStorage.setItem('@token', res.token);
    localStorage.setItem('@role', COMPANY);
    localStorage.setItem('@userInfo', JSON.stringify(res));
    localStorage.setItem('@isLoggedIn', true);
    dispatch({
      type: LOGIN_COMPANY_SUCCESSFUL,
      payload: {
        role: COMPANY,
        token: res.token,
        isLoggedIn: true,
        userInfo: {...res},
      }
    })
  }).catch(err => { 
    localStorage.clear();
    dispatch({ type: LOGIN_COMPANY_FAILURE })
    throw err;
  })
}

export const logout = () => async (dispatch) => {
  localStorage.clear();
  dispatch({
    type: LOGOUT,
    payload: {}
  })
}

export const refresh = () => async (dispatch) => {
  const role = localStorage.getItem("@role");
  Promise.resolve().then(() => {
    dispatch({
      type: REFRESH_SUCCESS,
      payload: {
        token: localStorage.getItem("@token"),
        role: localStorage.getItem("@role"),
        isLoggedIn: JSON.parse(localStorage.getItem("@isLoggedIn")),
        userInfo: JSON.parse(localStorage.getItem("@userInfo"))
      }
    })
  }).then(() => {
    if (role === STUDENT) {
      dispatch(announcementThunks.getStudentAnnouncements());
      dispatch(getStudentIndustryThunk());
    } else if (role === ADMIN) {
      dispatch(announcementThunks.getAdminAnnouncements());
      dispatch(getAdminIndustryThunk());
    } else if (role === COMPANY) {
      dispatch(getIndustryIndustryThunk());
    }
  }).catch(err => {
    localStorage.clear();
      dispatch({
        type: REFRESH_FAILURE
      })
  })
}

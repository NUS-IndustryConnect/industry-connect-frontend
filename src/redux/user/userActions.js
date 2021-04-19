import authenticationApi from "../../server/authenticationApi";
import { announcementThunks } from "../announcementSlice";
import { getAdminIndustryThunk, getIndustryIndustryThunk, getStudentIndustryThunk } from "../industry";
import { 
  LOGIN_ADMIN_SUCCESSFUL, 
  LOGIN_COMPANY_SUCCESSFUL, 
  LOGIN_STUDENT_SUCCESSFUL, 
  LOGOUT, 
  REFRESH
} from "./userTypes"

export const handleFetchAuth = (code) => async (dispatch) => {
  await authenticationApi.fetchAuth(code)
    .then(res => { // authenticated user
      localStorage.setItem('@token', res.webToken);
      localStorage.setItem('@userInfo', res);
      localStorage.setItem('@isLoggedIn', true);
      if (res.role === "NUSSTU") { // It is student login
        dispatch(loginStudent(res.webToken))
      } else {
        dispatch(loginAdmin(res.webToken))
      }
    }).catch(error => { throw error; })
}

const loginAdmin = (token) => async (dispatch) => {
  localStorage.setItem('@role', "admin");
  dispatch({
    type: LOGIN_ADMIN_SUCCESSFUL,
    payload: {
      role: "admin",
      token: token,
      isLoggedIn: true,
    }
  })
  dispatch(announcementThunks.getAdminAnnouncements());
  dispatch(getAdminIndustryThunk());
}

const loginStudent = (token) => async (dispatch) => {
  localStorage.setItem('@role', "student");
  dispatch({
    type: LOGIN_STUDENT_SUCCESSFUL,
    payload: {
      role: "student",
      token: token,
      isLoggedIn: true,
    }
  }).then(() => {
    dispatch(announcementThunks.getStudentAnnouncements());
    dispatch(getStudentIndustryThunk());
  })
}

export const loginCompanyWithOTP = (data) => async (dispatch) => {
  await authenticationApi.verifyOTP(data)
    .then(res => {
      console.log(res);
      localStorage.setItem('@token', "res.data.token");
      localStorage.setItem('@role', "industry");
      dispatch({
        type: LOGIN_COMPANY_SUCCESSFUL,
        payload: {
          role: "industry",
          token: "success",
          isLoggedIn: true,
          userInfo: {...res},
        }
      });
      dispatch(getIndustryIndustryThunk());
    })
    .catch(err => { throw err; })
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
  dispatch({
    type: REFRESH,
    payload: {
      token: localStorage.getItem("@token"),
      role: localStorage.getItem("@role"),
      isLoggedIn: localStorage.getItem("@isLoggedIn"),
      userInfo: localStorage.getItem("@userInfo")
    }
  })
  if (role === 'student') {
    dispatch(announcementThunks.getStudentAnnouncements());
    dispatch(getStudentIndustryThunk());
  } else if (role === 'admin') {
    dispatch(announcementThunks.getAdminAnnouncements());
    dispatch(getAdminIndustryThunk());
  } else if (role === 'industry') {
    dispatch(getIndustryIndustryThunk());
  }
}

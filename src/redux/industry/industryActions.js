import {
  LOAD_STUDENT_COMPANY_POSTS_DATA,
  LOAD_ADMIN_COMPANY_DATA,
  LOAD_ADMIN_USER_DATA,
  LOAD_ADMIN_REQUEST_DATA,
  LOAD_ADMIN_POST_DATA,
} from "../types"
import { getCompanyPostForStudents } from "./industryFunctions"
import adminApi from '../../admin/api';

export const loadStudentCompanyPostsData = () => {
  console.log('Loading Student Company Posts Data...')
  return async (dispatch) => {
    await getCompanyPostForStudents().then(posts => {
      dispatch({
        type: LOAD_STUDENT_COMPANY_POSTS_DATA,
        payload: posts
      })
    }).catch(err => {
      throw err;
    })
  }
}

export const loadAdminCompanyData = () => {
  console.log('Loading Admin Company Data...')
  return async (dispatch) => {
    try {
      const companies = await adminApi.companies.getCompanies();
      dispatch({
        type: LOAD_ADMIN_COMPANY_DATA,
        payload: companies
      });
    }
    catch (err) {
      throw err;
    }
  }
}

export const loadAdminCompanyUsersData = () => {
  console.log('Loading Admin User Data...')
  return async (dispatch) => {
    try {
      const users = await adminApi.users.getUsers();
      dispatch({
        type: LOAD_ADMIN_USER_DATA,
        payload: users
      });
    }
    catch (err) {
      throw err;
    }
  }
}

export const loadAdminCompanyPostsData = () => {
  console.log('Loading Admin Post Data...')
  return async (dispatch) => {
    try {
      const posts = await adminApi.posts.getPosts();
      dispatch({
        type: LOAD_ADMIN_POST_DATA,
        payload: posts
      });
    }
    catch (err) {
      throw err;
    }
  }
}

export const loadAdminPostRequestData = () => {
  console.log('Loading Admin Request Data...')
  return async (dispatch) => {
    try {
      const requests = await adminApi.requests.getRequests();
      dispatch({
        type: LOAD_ADMIN_REQUEST_DATA,
        payload: requests
      });
    }
    catch (err) {
      throw err;
    }
  }
}

export const loadAdminIndustryData = () => {
  return async (dispatch) => {
    await dispatch(loadAdminCompanyData());
    await dispatch(loadAdminCompanyUsersData());
    await dispatch(loadAdminCompanyPostsData());
    await dispatch(loadAdminPostRequestData());
  }
}
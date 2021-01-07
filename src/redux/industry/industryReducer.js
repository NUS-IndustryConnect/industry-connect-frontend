import {
  LOAD_STUDENT_COMPANY_POSTS_DATA,
  LOAD_ADMIN_COMPANY_DATA,
  LOAD_ADMIN_USER_DATA,
  LOAD_ADMIN_REQUEST_DATA,
  LOAD_ADMIN_POST_DATA,
} from "../types";

const initState = {
  posts: {
    archivedPosts: [],
    displayedPosts: [],
    pendingPosts: [],
  },
  companies: [],
  users: [],
  requests: []
}

export const postsSelector = state => state.industry.posts;
export const companiesSelector = state => state.industry.companies;
export const usersSelector = state => state.industry.users;
export const requestsSelector = state => state.industry.requests;
export const usersOfCompanySelector = state => state.industry.users;

const industryReducer = (state = initState, {type, payload}) => {
  switch (type) {
    case LOAD_STUDENT_COMPANY_POSTS_DATA:
      return {
        ...state,
        posts: {
          ...state.posts,
          displayedPosts: [...payload.displayedPosts],
        }
      }
    case LOAD_ADMIN_COMPANY_DATA:
      return {
        ...state,
        companies: payload
      }
    case LOAD_ADMIN_USER_DATA:
      return {
        ...state,
        users: payload,
      }
    case LOAD_ADMIN_REQUEST_DATA:
      return {
        ...state,
        requests: payload,
      }
    case LOAD_ADMIN_POST_DATA:
      return {
        ...state,
        posts: payload,
      }
    default:
      return state;
  }
}

export default industryReducer;

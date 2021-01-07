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
export const postSelector = id => state => {
  return postsSelector(state)
    .find(post => post.companyPostID === id);
}

export const companiesSelector = state => state.industry.companies;
export const companySelector = id => state => {
  return companiesSelector(state)
    .find(company => company.companyID === id);
}

export const usersSelector = state => state.industry.users;
export const userSelector = id => state => {
  return usersSelector(state)
    .find(user => user.companyUserID === id);
};
export const usersOfCompanySelector = companyID => state => {
  return usersSelector(state)
    .filter(user => user.companyID === companyID)
};

export const requestsSelector = state => state.industry.requests;
export const requestSelector = companyPostID => state => {
  return requestsSelector(state)
    .find(request => request.companyPostID === companyPostID);
}


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

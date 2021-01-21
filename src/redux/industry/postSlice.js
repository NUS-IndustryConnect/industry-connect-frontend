import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import adminApi from '../../admin/api';
import studentApi from '../../student/api';
import industryApi from '../../industry/api';
import { companiesSelector, mergeCompanyInfo } from './companySlice';
import { requestSelector } from './requestSlice';

// thunks
const getAdminPosts = createAsyncThunk('admin/posts/get', adminApi.posts.getPosts)
const getStudentPosts = createAsyncThunk('student/posts/get', studentApi.posts.getPostsApi)
const getIndustryPosts = createAsyncThunk('industry/posts/get', industryApi.posts.getPosts)
const createPost = createAsyncThunk('admin/posts/create', adminApi.posts.createPost)
const updatePost = createAsyncThunk('admin/posts/update', adminApi.posts.updatePost)
const archivePosts = createAsyncThunk('admin/posts/archive', adminApi.posts.archivePosts)
const unarchivePosts = createAsyncThunk('admin/posts/unarchive', adminApi.posts.unarchivePosts)

export const postThunks = {
  getAdminPosts,
  getStudentPosts,
  getIndustryPosts,
  createPost,
  updatePost,
  archivePosts,
  unarchivePosts,
}

export const postSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getAdminPosts.fulfilled]: (state, action) => {
      return action.payload;
    },
    [getStudentPosts.fulfilled]: (state, action) => {
      return action.payload;
    },
    [getIndustryPosts.fulfilled]: (state, action) => {
      return action.payload;
    },
    [createPost.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [updatePost.fulfilled]: (state, action) => {
      return state.map(elem =>
        elem.companyPostID === action.payload.companyPostID
          ? action.payload
          : elem);
    },
    [archivePosts.fulfilled]: (state, action) => {
      action.payload.forEach(companyPostID => {
        const i = state.findIndex(elem => elem.companyPostID === companyPostID);
        state[i].isActive = false;
      })
    },
    [unarchivePosts.fulfilled]: (state, action) => {
      action.payload.forEach(companyPostID => {
        const i = state.findIndex(elem => elem.companyPostID === companyPostID);
        state[i].isActive = true;
      })
    },
  }
});

// selectors
const rawPostsSelector = state => state.industry.posts;
export const postsSelector = state => { // TODO: memoise this
  const posts = rawPostsSelector(state);
  const companies = companiesSelector(state);
  return mergeCompanyInfo(posts, companies);
};
export const activePostsSelector = state => {
  return postsSelector(state).filter(elem => elem.isActive)
}
export const archivedPostsSelector = state => {
  return postsSelector(state).filter(elem => !elem.isActive);
}
export const postSelector = companyPostID => state => {
  return postsSelector(state)
    .find(elem => elem.companyPostID === companyPostID)
}
export const postOrRequestSelector = companyPostID => state => {
  return postSelector(companyPostID)(state)
      || requestSelector(companyPostID)(state);
}

export const postsByCompanySelector = companyID => state => {
  return postsSelector(state)
    .filter(elem => elem.companyID === companyID)
}

export default postSlice.reducer;
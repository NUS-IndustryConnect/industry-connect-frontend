import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import adminApi from '../../admin/api';
import studentApi from '../../student/api';
import industryApi from '../../industry/api';
import { putPayloadToState } from '../utils';
import { companiesSelector, mergeCompanyInfo } from './companySlice';
import { approveRequest, requestSelector } from './requestSlice';

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
    [getAdminPosts.fulfilled]: putPayloadToState,
    [getStudentPosts.fulfilled]: putPayloadToState,
    [getIndustryPosts.fulfilled]: putPayloadToState,
    [createPost.fulfilled]: putPayloadToState,
    [updatePost.fulfilled]: putPayloadToState,
    [archivePosts.fulfilled]: putPayloadToState,
    [unarchivePosts.fulfilled]: (state, action) => {
      action.payload.forEach(companyPostId => {
        const i = state.findIndex(elem => elem.companyPostId === companyPostId);
        state[i].isActive = true;
      })
    },
    [approveRequest.fulfilled]: (state, action) => {
      // TODO: add this to posts
    }
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
export const postSelector = companyPostId => state => {
  return postsSelector(state)
    .find(elem => elem.companyPostId == companyPostId)
}
export const postOrRequestSelector = companyPostId => state => {
  return postSelector(companyPostId)(state)
      || requestSelector(companyPostId)(state);
}

export const postsByCompanySelector = companyId => state => {
  return postsSelector(state)
    .filter(elem => elem.companyId === companyId)
}

export default postSlice.reducer;
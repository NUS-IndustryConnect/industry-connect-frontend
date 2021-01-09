import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import adminApi from '../../admin/api';
import { requestSelector } from './requestSlice';

// thunks
const getPosts = createAsyncThunk('admin/posts/get', adminApi.posts.getPosts)
const createPost = createAsyncThunk('admin/posts/create', adminApi.posts.createPost)
const updatePost = createAsyncThunk('admin/posts/update', adminApi.posts.updatePost)
const archivePosts = createAsyncThunk('admin/posts/archive', adminApi.posts.archivePosts)
const deletePosts = createAsyncThunk('admin/posts/delete', adminApi.posts.deletePosts)

export const postThunks = {
  getPosts,
  createPost,
  updatePost,
  archivePosts,
  deletePosts,
}

export const postSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getPosts.fulfilled]: (state, action) => {
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
      const i = state.findIndex(elem => elem.companyPostId === action.payload);
      state[i].isActive = false;
    },
    [deletePosts.fulfilled]: (state, action) => {
      return state.filter(elem => elem.companyPostID !== action.payload)
    },
  }
});

// selectors
export const postsSelector = state => state.industry.posts;
export const displayedPostsSelector = state => {
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
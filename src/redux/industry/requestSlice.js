import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import adminApi from '../../admin/api';

// thunks
const getRequests = createAsyncThunk('admin/requests/get', adminApi.requests.getRequests)
const createRequest = createAsyncThunk('admin/requests/create', adminApi.requests.createRequest)
const approveRequest = createAsyncThunk('admin/requests/approve', adminApi.requests.approveRequest)
const rejectRequest = createAsyncThunk('admin/requests/reject', adminApi.requests.rejectRequest)

export const requestThunks = {
  getRequests,
  createRequest,
  approveRequest,
  rejectRequest,
}

// slice
export const requestSlice = createSlice({
  name: "requests",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getRequests.fulfilled]: (state, action) => {
      return action.payload;
    },
    [createRequest.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [approveRequest.fulfilled]: (state, action) => {
      
    },
    [rejectRequest.fulfilled]: (state, action) => {
      
    },
  }
});

// selectors
export const requestsSelector = state => state.industry.requests;
export const requestSelector = companyPostID => state => {
  return requestsSelector(state)
    .find(elem => elem.companyPostID === companyPostID);
}

export default requestSlice.reducer;
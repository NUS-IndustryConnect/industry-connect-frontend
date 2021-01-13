import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import adminApi from '../../admin/api';
import industryApi from '../../industry/api';
import { companiesSelector, mergeCompanyInfo } from './companySlice';

// thunks
const getAdminRequests = createAsyncThunk('admin/requests/get', adminApi.requests.getRequests)
const getIndustryRequests = createAsyncThunk('industry/requests/get', industryApi.requests.getRequests)
const createRequest = createAsyncThunk('admin/requests/create', adminApi.requests.createRequest)
const approveRequest = createAsyncThunk('admin/requests/approve', adminApi.requests.approveRequest)
const rejectRequest = createAsyncThunk('admin/requests/reject', adminApi.requests.rejectRequest)

export const requestThunks = {
  getAdminRequests,
  getIndustryRequests,
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
    [getAdminRequests.fulfilled]: (state, action) => {
      return action.payload;
    },
    [getIndustryRequests.fulfilled]: (state, action) => {
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
const rawRequestsSelector = state => state.industry.requests;
export const requestsSelector = state => {
  const requests = rawRequestsSelector(state);
  const companies = companiesSelector(state);
  return mergeCompanyInfo(requests, companies);
}
export const requestSelector = companyPostID => state => {
  return requestsSelector(state)
    .find(elem => elem.companyPostID === companyPostID);
}
export const requestsByCompanySelector = companyID => state => {
  return requestsSelector(state)
    .filter(elem => elem.companyID === companyID)
}

export default requestSlice.reducer;
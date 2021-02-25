import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import adminApi from '../../server/adminApi';
import companyApi from '../../server/companyApi';
import { putPayloadToState } from '../utils';
import { companiesSelector, mergeCompanyInfo } from './companySlice';

// thunks
const getAdminRequests = createAsyncThunk('admin/requests/get', adminApi.companyPostRequests.getRequestsAdmin)
const getIndustryRequests = createAsyncThunk('industry/requests/get', companyApi.companyPostRequests.getRequests)
const createRequest = createAsyncThunk('admin/requests/create', adminApi.companyPostRequests.createRequest)
export const approveRequest = createAsyncThunk('admin/requests/approve', adminApi.companyPostRequests.approveRequest)
const rejectRequest = createAsyncThunk('admin/requests/reject', adminApi.companyPostRequests.rejectRequest)

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
    [getAdminRequests.fulfilled]: putPayloadToState,
    [getIndustryRequests.fulfilled]: putPayloadToState,
    [createRequest.fulfilled]: putPayloadToState,
    [approveRequest.fulfilled]: putPayloadToState,
    [rejectRequest.fulfilled]: putPayloadToState,
  }
});

// selectors
const rawRequestsSelector = state => state.industry.requests;
export const requestsSelector = state => {
  const requests = rawRequestsSelector(state);
  const companies = companiesSelector(state);
  return mergeCompanyInfo(requests, companies);
}
export const requestSelector = companyPostRequestId => state => {
  return requestsSelector(state)
    .find(elem => elem.companyPostRequestId === companyPostRequestId);
}
export const requestsByCompanySelector = companyId => state => {
  return requestsSelector(state)
    .filter(elem => elem.companyId === companyId)
}

export default requestSlice.reducer;

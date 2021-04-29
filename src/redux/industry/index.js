import { combineReducers } from 'redux'
import { createSlice } from '@reduxjs/toolkit';

import companiesReducer, { clearCompanyData, companyThunks } from './companySlice';
import usersReducer, { clearCompanyUserData, companyUserThunks } from './userSlice';
import requestsReducer, { clearRequestData, requestThunks } from './requestSlice';
import postsReducer, { clearPostData, postThunks } from './postSlice';
import { userInfoSelector } from '../user/userSelectors';

const dataFetchedReducer = createSlice({
  name: "dataFetched",
  initialState: false,
  reducers: {
    fetch: () => true,
    clearIndustryData: () => false,
  }
});

// actions
export const { fetch, clearIndustryData } = dataFetchedReducer.actions;

export const clearIndustry = () => async dispatch => {
  await Promise.all([
    dispatch(clearCompanyData()),
    dispatch(clearCompanyUserData()),
    dispatch(clearPostData()),
    dispatch(clearRequestData()),
  ])
  dispatch(clearIndustryData());
}

export const industryDataFetchedSelector = state => state.industry.dataFetched;

export const getAdminIndustryThunk = () => async dispatch => {
  await Promise.all([
    dispatch(companyThunks.getAdminCompanies()),
    dispatch(companyUserThunks.getUsers()),
    dispatch(requestThunks.getAdminRequests()),
    dispatch(postThunks.getAdminPosts()),
  ])
  dispatch(dataFetchedReducer.actions.fetch());
}

export const getStudentIndustryThunk = () => async dispatch => {
  await Promise.all([
    dispatch(companyThunks.getStudentCompanies()),
    dispatch(postThunks.getStudentPosts()),
  ]);
  dispatch(dataFetchedReducer.actions.fetch());
}

export const getIndustryIndustryThunk = () => async (dispatch, getState) => {
  const { companyId } = userInfoSelector(getState())
  await Promise.all([
    dispatch(postThunks.getIndustryPosts(companyId)),
    dispatch(requestThunks.getIndustryRequests(companyId))
  ])
  dispatch(dataFetchedReducer.actions.fetch());
}

const industryReducer = combineReducers({
  companies: companiesReducer,
  users: usersReducer,
  posts: postsReducer,
  requests: requestsReducer,
  dataFetched: dataFetchedReducer.reducer,
})

export default industryReducer;

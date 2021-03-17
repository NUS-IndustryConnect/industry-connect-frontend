import { combineReducers } from 'redux'

import companiesReducer, { clearCompanyData, companyThunks } from './companySlice';
import usersReducer, { clearCompanyUserData, userThunks } from './userSlice';
import requestsReducer, { clearRequestData, requestThunks } from './requestSlice';
import postsReducer, { clearPostData, postThunks } from './postSlice';
import { createSlice } from '@reduxjs/toolkit';

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
    dispatch(userThunks.getUsers()),
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

export const getIndustryIndustryThunk = () => async dispatch => {
  await Promise.all([
    dispatch(postThunks.getIndustryPosts()),
    dispatch(requestThunks.getIndustryRequests())
  ])
  dispatch(dataFetchedReducer.actions.fetch());
}

const industryReducer = combineReducers({
  companies: companiesReducer,
  users: usersReducer,
  requests: requestsReducer,
  posts: postsReducer,
  dataFetched: dataFetchedReducer.reducer,
})

export default industryReducer;

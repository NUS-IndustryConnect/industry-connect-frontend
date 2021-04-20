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
  ]).then(() => {
    dispatch(clearIndustryData());
  }).catch(err => {
    throw err;
  })
}

export const industryDataFetchedSelector = state => state.industry.dataFetched;

export const getAdminIndustryThunk = () => async dispatch => {
  await Promise.all([
    dispatch(companyThunks.getAdminCompanies()),
    dispatch(companyUserThunks.getUsers()),
    dispatch(requestThunks.getAdminRequests()),
    dispatch(postThunks.getAdminPosts()),
  ]).then(() => {
    dispatch(dataFetchedReducer.actions.fetch());
  }).catch(err => { 
    throw err; 
  })
}

export const getStudentIndustryThunk = () => async dispatch => {
  await Promise.all([
    dispatch(companyThunks.getStudentCompanies()),
    dispatch(postThunks.getStudentPosts()),
  ]).then(() => {
    dispatch(dataFetchedReducer.actions.fetch());
  }).catch(err => {
    throw err;
  })
}

export const getIndustryIndustryThunk = () => async (dispatch, getState) => {
  const { companyId } = userInfoSelector(getState());
  await Promise.all([
    dispatch(postThunks.getIndustryPosts(companyId)),
    dispatch(requestThunks.getIndustryRequests(companyId))
  ]).then(() => {
    dispatch(dataFetchedReducer.actions.fetch());
  }).catch(err => {
    throw err;
  })
}

const industryReducer = combineReducers({
  companies: companiesReducer,
  users: usersReducer,
  requests: requestsReducer,
  posts: postsReducer,
  dataFetched: dataFetchedReducer.reducer,
})

export default industryReducer;

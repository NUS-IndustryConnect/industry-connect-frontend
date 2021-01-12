import { combineReducers } from 'redux'

import companiesReducer, { companyThunks } from './companySlice';
import usersReducer, { userThunks } from './userSlice';
import requestsReducer, {requestThunks } from './requestSlice';
import postsReducer, { postThunks } from './postSlice';
import { createSlice } from '@reduxjs/toolkit';

const dataFetchedReducer = createSlice({
  name: "dataFetched",
  initialState: false,
  reducers: {
    fetch() {
      return true;
    }
  }
});

export const industryDataFetchedSelector = state => state.industry.dataFetched;

export const getAdminIndustryThunk = () => async dispatch => {
  await Promise.all([
    dispatch(companyThunks.getAdminCompanies()),
    dispatch(userThunks.getUsers()),
    dispatch(requestThunks.getRequests()),
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

const industryReducer = combineReducers({
  companies: companiesReducer,
  users: usersReducer,
  requests: requestsReducer,
  posts: postsReducer,
  dataFetched: dataFetchedReducer.reducer,
})

export default industryReducer;

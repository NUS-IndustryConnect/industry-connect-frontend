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

export const getIndustryDataThunk = () => dispatch => {
  dispatch(dataFetchedReducer.actions.fetch());
  dispatch(companyThunks.getCompanies());
  dispatch(userThunks.getUsers());
  dispatch(requestThunks.getRequests());
  dispatch(postThunks.getPosts());
}

const industryReducer = combineReducers({
  companies: companiesReducer,
  users: usersReducer,
  requests: requestsReducer,
  posts: postsReducer,
  dataFetched: dataFetchedReducer.reducer,
})

export default industryReducer;

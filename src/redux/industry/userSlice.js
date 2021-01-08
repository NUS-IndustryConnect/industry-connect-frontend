import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import adminApi from '../../admin/api';
import { companiesSelector, mergeCompanyInfo } from './companySlice';
import { pluraliseThunk } from '../utils';

// thunks
const getUsers = createAsyncThunk('admin/users/get', adminApi.users.getUsers)
const postUser = createAsyncThunk('admin/users/create', adminApi.users.postUser)
const deleteUser = createAsyncThunk('admin/users/delete', adminApi.users.deleteUser)
const deleteUsers = pluraliseThunk(deleteUser);

export const userThunks = {
  getUsers,
  postUser,
  deleteUser,
  deleteUsers,
}

// slice
export const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getUsers.fulfilled]: (state, action) => {
      return action.payload;
    },
    [postUser.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [deleteUser.fulfilled]: (state, action) => {
      state = state.filter(elem => elem.companyUserID !== action.payload)
    }
  }
});

// selectors
const rawUsersSelector = state => state.industry.users;
export const usersSelector = state => {
  const users = rawUsersSelector(state);
  const companies = companiesSelector(state);
  return mergeCompanyInfo(users, companies);
};
export const usersOfCompanySelector = companyID => state => {
  return usersSelector(state)
    .filter(elem => elem.companyID === companyID)
}
export const userSelector = companyUserID => state => {
  return usersSelector(state)
    .find(elem => elem.companyUserID === companyUserID);
}

export default userSlice.reducer;
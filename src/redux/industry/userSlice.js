import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import adminApi from '../../admin/api';
import { companiesSelector, mergeCompanyInfo } from './companySlice';
import { pluraliseThunk } from '../utils';
import { postSelector } from './postSlice';

// thunks
const getUsers = createAsyncThunk('admin/users/get', adminApi.users.getUsers)
const postUser = createAsyncThunk('admin/users/create', adminApi.users.postUser)
const updateUser = createAsyncThunk('admin/users/update', adminApi.users.updateUser)
const unlockUser = createAsyncThunk('admin/users/unlock', adminApi.users.unlockUser);
const archiveUser = createAsyncThunk('admin/users/archive', adminApi.users.archiveUser)
const unarchiveUser = createAsyncThunk('admin/users/unarchive', adminApi.users.unarchiveUser)
const archiveUsers = pluraliseThunk(archiveUser);
const unarchiveUsers = pluraliseThunk(unarchiveUser);

export const userThunks = {
  getUsers,
  postUser,
  updateUser,
  unlockUser,
  archiveUser,
  archiveUsers,
  unarchiveUser,
  unarchiveUsers,
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
    [updateUser.fulfilled]: (state, action) => {
      return state.map(elem =>
        elem.companyUserID === action.payload.companyUserID
          ? action.payload
          : elem);
    },
    [unlockUser.fulfilled]: (state, action) => {
      const i = state.findIndex(elem => elem.companyUserID === action.payload);
      state[i].isLocked = false;
      state[i].lockedUntil = null;
    },
    [archiveUser.fulfilled]: (state, action) => {
      const i = state.findIndex(elem => elem.companyUserID === action.payload);
      state[i].isActive = false;
    },
    [unarchiveUser.fulfilled]: (state, action) => {
      const i = state.findIndex(elem => elem.companyUserID === action.payload);
      state[i].isActive = true;
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
export const activeUsersSelector = state => {
  return usersSelector(state).filter(elem => elem.isActive);
}
export const archivedUsersSelector = state => {
  return usersSelector(state).filter(elem => !elem.isActive);
}

export const usersOfCompanySelector = companyId => state => {
  return usersSelector(state)
    .filter(elem => elem.companyId === companyId)
}
export const userSelector = companyUserID => state => {
  const rawUser = usersSelector(state)
    .find(elem => elem.companyUserID === companyUserID);
  const userPosts = rawUser?.userPosts
    .map(id => postSelector(id)(state))
    .filter(Boolean);
  return rawUser
    ? { ...rawUser, userPosts }
    : rawUser;
}

export default userSlice.reducer;
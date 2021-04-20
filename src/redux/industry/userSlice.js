import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import adminApi from '../../server/adminApi';
import { companiesSelector, mergeCompanyInfo } from './companySlice';
import { pluraliseThunk, putPayloadToState } from '../utils';
import { postsSelector } from './postSlice';

// thunks
const getUsers = createAsyncThunk('admin/users/get', adminApi.companyUsers.getAllCompanyUsers)
const postUser = createAsyncThunk('admin/users/create', adminApi.companyUsers.postCompanyUser)
const updateUser = createAsyncThunk('admin/users/update', adminApi.companyUsers.updateCompanyUser)
const unlockUser = createAsyncThunk('admin/users/unlock', adminApi.companyUsers.unlockCompanyUser);
const archiveUser = createAsyncThunk('admin/users/archive', adminApi.companyUsers.archiveCompanyUser)
const unarchiveUser = createAsyncThunk('admin/users/unarchive', adminApi.companyUsers.unarchiveCompanyUser)
const archiveUsers = pluraliseThunk(archiveUser);
const unarchiveUsers = pluraliseThunk(unarchiveUser);

export const companyUserThunks = {
  getUsers,
  postUser,
  updateUser,
  unlockUser,
  archiveUser,
  archiveUsers,
  unarchiveUser,
  unarchiveUsers,
}

const replaceUser = (state, action) => {
  return state.map(elem =>
    elem.companyUserId === action.payload.companyUserId
      ? action.payload
      : elem);
}

// slice
export const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    clearCompanyUserData: () => [],
  },
  extraReducers: {
    [getUsers.fulfilled]: putPayloadToState,
    [postUser.fulfilled]: putPayloadToState,
    [updateUser.fulfilled]: putPayloadToState,
    [archiveUser.fulfilled]: replaceUser,
    [unarchiveUser.fulfilled]: replaceUser,
    [unlockUser.fulfilled]: (state, action) => {
      const i = state.findIndex(elem => elem.companyUserId === action.payload);
      state[i].isLocked = false;
      state[i].lockedUntil = null;
    }
  }
});

// actions
export const { clearCompanyUserData } = userSlice.actions;

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

export const companyUsersDropdownSelector = state => {
  return activeUsersSelector(state)
    .map(({ companyUserId, email }) => ({ value: companyUserId, label: email }));
}

export const companyUserSelector = companyUserId => state => {
  const rawUser = usersSelector(state)
    .find(elem => elem.companyUserId === companyUserId);
  const rawPosts = postsSelector(state);
  const userPosts = rawPosts.filter(elem => elem.companyUserId === companyUserId);
  return { ...rawUser, userPosts };
}

export default userSlice.reducer;

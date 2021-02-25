import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import adminApi from '../../admin/api';
import { getCompanies } from '../../student/api/companies';
import { pluraliseThunk, putPayloadToState } from '../utils';
import { postsSelector } from './postSlice';

// thunks
const getAdminCompanies = createAsyncThunk('admin/companies/get', adminApi.companies.getCompanies);
const getStudentCompanies = createAsyncThunk('student/companies/get', getCompanies);
const postCompany = createAsyncThunk('admin/companies/post', adminApi.companies.postCompany);
const updateCompany = createAsyncThunk('admin/companies/update', adminApi.companies.updateCompany);
const archiveCompany = createAsyncThunk('admin/companies/archive', adminApi.companies.archiveCompany);
const unarchiveCompany = createAsyncThunk('admin/companies/unarchive', adminApi.companies.unarchiveCompany);

const archiveCompanies = pluraliseThunk(archiveCompany);
const unarchiveCompanies = pluraliseThunk(unarchiveCompany);

export const companyThunks = {
  getAdminCompanies,
  getStudentCompanies,
  postCompany,
  updateCompany,
  archiveCompany,
  archiveCompanies,
  unarchiveCompany,
  unarchiveCompanies,
}

// slice
export const companySlice = createSlice({
  name: "companies",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getAdminCompanies.fulfilled]: putPayloadToState,
    [getStudentCompanies.fulfilled]: putPayloadToState,
    [postCompany.fulfilled]: putPayloadToState,
    [updateCompany.fulfilled]: putPayloadToState,
    [archiveCompany.fulfilled]: putPayloadToState,
    [unarchiveCompany.fulfilled]: (state, action) => {
      const i = state.findIndex(elem => elem.companyId === action.payload);
      state[i].isActive = true;
    }
  }
});

// selectors
export const companiesSelector = state => state.industry.companies;
export const companiesDropdownSelector = state => {
  return companiesSelector(state)
    .map(({ companyId, companyName }) => ({ value: companyId, label: companyName }))
}
export const companySelector = companyId => state => {
  const rawCompany = companiesSelector(state)
    .find(elem => elem.companyId === companyId);
  const rawCompanyPosts = postsSelector(state);
  const companyPosts = rawCompanyPosts.filter((elem) => elem.companyId === companyId);
  return { ...rawCompany, companyPosts };
}

export const activeCompaniesSelector = state => {
  return companiesSelector(state).filter(elem => elem.isActive)
}

export const archivedCompaniesSelector = state => {
  return companiesSelector(state).filter(elem => !elem.isActive);
}

const arrayToObj = (arr, key) => {
  let obj = {};
  arr.forEach(elem => {
    obj[elem[key]] = elem;
  })
  return obj;
}

export const mergeCompanyInfo = (users, companies) => {
  const companiesObj = arrayToObj(companies, "companyId");
  return users.map(
    user => ({
      ...user,
      company: companiesObj[user.companyId]
    })
  );
}

export default companySlice.reducer;

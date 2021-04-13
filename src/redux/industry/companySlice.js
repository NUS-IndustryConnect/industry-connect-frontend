import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import adminApi from '../../server/adminApi';
import studentApi from '../../server/studentApi';
import { pluraliseThunk, putPayloadToState } from '../utils';
import { postsSelector } from './postSlice';
import { COMPANY_TIERS } from '../../admin/pages/Industry/Companies/CompaniesForm';

// thunks
const getAdminCompanies = createAsyncThunk('admin/companies/get', adminApi.companies.getCompanies);
const getStudentCompanies = createAsyncThunk('student/companies/get', studentApi.getCompanies);
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

export const companyComparator = (a, b) => {
  if (a.companyName < b.companyName) return -1;
  if (a.companyName > b.companyName) return 1;
  return 0;
}

// slice
export const companySlice = createSlice({
  name: "companies",
  initialState: [],
  reducers: {
    clearCompanyData: () => [],
  },
  extraReducers: {
    [getAdminCompanies.fulfilled]: putPayloadToState,
    [getStudentCompanies.fulfilled]: putPayloadToState,
    [postCompany.fulfilled]: putPayloadToState,
    [updateCompany.fulfilled]: putPayloadToState,
    [archiveCompany.fulfilled]: putPayloadToState,
    [unarchiveCompany.fulfilled]: putPayloadToState,
  }
});

// actions
export const { clearCompanyData } = companySlice.actions;

// selectors
const companyDisplayName = (companyName, companyTier) =>
  `${companyName} (${COMPANY_TIERS.find(elem => elem.value === companyTier).label})`;
export const companiesSelector = state => state.industry.companies;
export const companiesDropdownSelector = state => {
  return companiesSelector(state)
    .map(({ companyId, companyName, companyTier }) => ({
      value: companyId,
      label: companyDisplayName(companyName, companyTier),
    }))
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

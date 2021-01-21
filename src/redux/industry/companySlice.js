import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import adminApi from '../../admin/api';
import studentApi from '../../student/api';
import { pluraliseThunk } from '../utils';
import { postSelector } from './postSlice';

// thunks
const getAdminCompanies = createAsyncThunk('admin/companies/get', adminApi.companies.getCompanies);
const getStudentCompanies = createAsyncThunk('student/companies/get', studentApi.companies.getCompanies);
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
    [getAdminCompanies.fulfilled]: (state, action) => {
      return action.payload;
    },
    [getStudentCompanies.fulfilled]: (state, action) => {
      return action.payload;
    },
    [postCompany.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [updateCompany.fulfilled]: (state, action) => {
      return state.map(elem =>
        elem.companyID === action.payload.companyID
          ? action.payload
          : elem);
    },
    [archiveCompany.fulfilled]: (state, action) => {
      const i = state.findIndex(elem => elem.companyID === action.payload);
      state[i].isActive = false;
    },
    [unarchiveCompany.fulfilled]: (state, action) => {
      const i = state.findIndex(elem => elem.companyID === action.payload);
      state[i].isActive = true;
    }
  }
});

// selectors
export const companiesSelector = state => state.industry.companies;
export const companiesDropdownSelector = state => {
  return companiesSelector(state)
    .map(({ companyID, companyName }) => ({ value: companyID, label: companyName }))
}
export const companySelector = companyID => state => {
  const rawCompany = companiesSelector(state)
    .find(elem => elem.companyID === companyID);
  const companyPosts = rawCompany?.companyPosts
    .map(id => postSelector(id)(state))
    .filter(Boolean);
  return rawCompany
    ? { ...rawCompany, companyPosts }
    : rawCompany;
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
  const companiesObj = arrayToObj(companies, "companyID");
  return users.map(
    user => ({
      ...user,
      company: companiesObj[user.companyID]
    })
  );
}

export default companySlice.reducer;
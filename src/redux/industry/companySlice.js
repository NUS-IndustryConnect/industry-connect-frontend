import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import adminApi from '../../admin/api';
import { pluraliseThunk } from '../utils';

// thunks
const getCompanies = createAsyncThunk('admin/companies/get', adminApi.companies.getCompanies);
const postCompany = createAsyncThunk('admin/companies/post', adminApi.companies.postCompany);
const updateCompany = createAsyncThunk('admin/companies/update', adminApi.companies.updateCompany);
const deleteCompany = createAsyncThunk('admin/companies/delete', adminApi.companies.deleteCompany);
const deleteCompanies = pluraliseThunk(deleteCompany);

export const companyThunks = {
  getCompanies,
  postCompany,
  updateCompany,
  deleteCompany,
  deleteCompanies,
}

// slice
export const companySlice = createSlice({
  name: "companies",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getCompanies.fulfilled]: (state, action) => {
      return action.payload;
    },
    [postCompany.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [updateCompany.fulfilled]: (state, action) => {
      state = state.map(elem =>
        elem.companyID === action.payload.companyID
          ? action.payload
          : elem);
    },
    [deleteCompany.fulfilled]: (state, action) => {
      state = state.filter(elem => elem.companyID !== action.payload)
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
  return companiesSelector(state)
    .find(elem => elem.companyID === companyID);
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
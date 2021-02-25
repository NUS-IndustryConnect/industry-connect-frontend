import { api } from "../utils";

const getCompanyUsers = async () => {
  return api.get('/companyUser/users')
  .then(response => response.data)
  .catch(error => {
    console.error(error);
    return [];
  });
}

const getUsersOfCompany = companyId => {
  return api.get(`/companyUser/company/${companyId}`);
}

const getCompanyUser = async companyUserId => {
  return api.get(`/companyUser/user/${companyUserId}`)
}

const postCompanyUser = async data => {
  return api.post('/companyUser/create', data)
  .then(response => response.data)
  .catch(error => {
    console.error(error);
    return [];
  });
}

const updateCompanyUser = async data => {
  return data;
  // TODO: BE API missing
  // return api.post('/companyUser/update', data);
}

const unlockCompanyUser = async companyUserId => {
  return companyUserId;
}

const archiveCompanyUser = async companyUserId => {
  return companyUserId;
  // TODO: BE API missing
  // return api.post(`/companyUser/archive/${companyUserId}`)
  // .then(response => response.data);
}

const unarchiveCompanyUser = async companyUserId => {
  // TODO: BE API missing
  return companyUserId;
}

const companyUsers = {
  getCompanyUsers,
  getUsersOfCompany,
  getCompanyUser,
  postCompanyUser,
  updateCompanyUser,
  unlockCompanyUser,
  archiveCompanyUser,
  unarchiveCompanyUser,
}

export default companyUsers;

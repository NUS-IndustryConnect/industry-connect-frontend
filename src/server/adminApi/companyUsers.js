import { api } from "../utils";

const getAllCompanyUsers = async () => {
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

const updateCompanyUser = async (data) => {
  return api.put('/companyUser/update/', data)
  .then(response => response.data);
}

const unlockCompanyUser = async companyUserId => {
  return companyUserId;
}

const archiveCompanyUser = async companyUserId => {
  return api.put(`/companyUser/archive/${companyUserId}`)
  .then(response => response.data);
}

const unarchiveCompanyUser = async companyUserId => {
  return api.put(`/companyUser/unarchive/${companyUserId}`)
  .then(response => response.data);
}

const companyUsers = {
  getAllCompanyUsers,
  getUsersOfCompany,
  getCompanyUser,
  postCompanyUser,
  updateCompanyUser,
  unlockCompanyUser,
  archiveCompanyUser,
  unarchiveCompanyUser,
}

export default companyUsers;

import { api } from ".";

const getUsers = async () => {
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

const getUser = async companyUserId => {
  return api.get(`/companyUser/user/${companyUserId}`)
}

const postUser = async data => {
  return api.post('/companyUser/create', data)
  .then(response => response.data)
  .catch(error => {
    console.error(error);
    return [];
  });
}

const updateUser = async data => {
  return data;
  // TODO: BE API missing
  // return api.post('/companyUser/update', data);
}

const unlockUser = async companyUserId => {
  return companyUserId;
}

const archiveUser = async companyUserId => {
  return companyUserId;
  // TODO: BE API missing
  // return api.post(`/companyUser/archive/${companyUserId}`)
  // .then(response => response.data);
}

const unarchiveUser = async companyUserId => {
  // TODO: BE API missing
  return companyUserId;
}

const usersApi = {
  getUsers,
  getUsersOfCompany,
  getUser,
  postUser,
  updateUser,
  unlockUser,
  archiveUser,
  unarchiveUser,
}

export default usersApi;
